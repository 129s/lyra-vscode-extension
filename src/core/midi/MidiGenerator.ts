import { Root, BlockClip, AlignedClip, Content, Metadata, Clip } from "../ast/ASTTypes";
import { Logger } from "../utils/Logger";
import { NoteUtils } from "../utils/NoteUtils";
const MidiWriter = require('midi-writer-js');
const { Writer, Track, NoteEvent } = MidiWriter;

export class MidiGenerator {
    private readonly ticksPerBeat = 960;
    private track!: InstanceType<typeof Track>;
    private clipRegistry = new Map<string, any>();

    // 音乐参数（带作用域）
    private bpmStack: number[] = [NoteUtils.DEFAULT_BPM];
    private keyStack: string[] = ["C"];
    private octaveStack: number[] = [4];
    private timeSignatureStack: Array<[number, number]> = [[4, 4]];

    generate(ast: Root): Buffer {
        this.initializeTrack();
        this.processContent(ast.content);
        return this.buildMidiFile();
    }

    private initializeTrack() {
        this.track = new Track();
        this.track.setTimeSignature(...this.currentTimeSignature, 24, 8);
        this.track.setTempo(this.currentBPM);
    }

    private processContent(content: Content, startTime: number = 0): number {
        if (!content) return startTime;

        let cursor = startTime;

        // 应用元数据作用域
        const restore = this.applyLocalMetadata(content.metadata);

        // 处理元素（音符序列）
        content.elements.forEach(element => {
            if (element.type === 'NoteLine') {
                cursor = this.processNoteLine(element, cursor);
            }
        });

        // 处理片段
        content.clips.forEach(clip => {
            cursor = this.processClip(clip, cursor);
        });

        // 恢复元数据状态
        restore();
        return cursor;
    }

    private processClip(clip: Clip, startTime: number): number {
        switch (clip.type) {
            case 'BlockClip': return this.processBlockClip(clip, startTime);
            case 'AlignedClip': return this.processAlignedClip(clip, startTime);
            case 'UniformClip': return this.processUniformClip(clip, startTime);
            case 'ReferenceClip': return this.processReferenceClip(clip, startTime);
            default: return startTime;
        }
    }

    private processBlockClip(clip: BlockClip, startTime: number): number {
        let cursor = startTime;

        // 处理pre部分
        if (clip.pre) {
            cursor = this.processContent(clip.pre, cursor);
        }

        // 处理post部分
        return clip.post ? this.processContent(clip.post, cursor) : cursor;
    }

    private processAlignedClip(clip: AlignedClip, startTime: number): number {
        const children = [clip.pre, clip.post].filter(Boolean);
        let maxEnd = startTime;

        children.forEach(child => {
            const endTime = this.processContent(child!, startTime);
            maxEnd = Math.max(maxEnd, endTime);
        });

        return maxEnd;
    }

    private processUniformClip(clip: any, startTime: number): number {
        const beatDuration = this.ticksPerBeat / 4;
        let cursor = startTime;

        clip.content.clips.forEach((child: any, index: number) => {
            const slotStart = startTime + index * beatDuration;
            cursor = Math.max(cursor, this.processClip(child, slotStart));
        });

        return cursor;
    }

    private processReferenceClip(clip: any, startTime: number): number {
        const referenced = this.clipRegistry.get(clip.identifier);
        return referenced ? this.processClip(referenced, startTime) : startTime;
    }

    private processNoteLine(noteLine: any, startTime: number): number {
        Logger.info('Processing NoteLine: ' + JSON.stringify(noteLine.items))
        let cursor = startTime;

        noteLine.items.forEach((item: any) => {
            const durationTicks = item.type === 'Note' ?
                this.calculateNoteTicks(item) :
                this.calculateRestTicks(item);

            if (item.type === 'Note') {
                this.addNoteEvent(item, cursor, durationTicks);
                Logger.info(`Adding note: ${JSON.stringify(item)}, durationTicks: ${durationTicks}`);
            }

            cursor += durationTicks;
        });

        return cursor;
    }

    private addNoteEvent(note: any, startTicks: number, durationTicks: number) {
        const midiPitch = this.calculateMidiPitch(note);

        this.track.addEvent(new NoteEvent({
            pitch: midiPitch.toString(),
            duration: this.ticksToDuration(durationTicks),
            velocity: 100,
            startTick: startTicks
        }));
    }

    // 元数据作用域管理
    private applyLocalMetadata(metadataList: Metadata[]): () => void {
        const prevBPM = this.currentBPM;
        const prevKey = this.currentKey;
        const prevOctave = this.currentOctave;
        const prevTimeSig = this.currentTimeSignature;

        metadataList.forEach(meta => {
            switch (meta.key.toLowerCase()) {
                case 'bpm':
                    if (meta.value.type === 'number') {
                        this.bpmStack.push(meta.value.value);
                    }
                    break;
                case 'key':
                    const keyInfo = NoteUtils.parseKeyMetadata([meta]);
                    this.keyStack.push(keyInfo.key);
                    this.octaveStack.push(keyInfo.octave);
                    break;
                case 'meter':
                    if (meta.value.type === 'fraction') {
                        this.timeSignatureStack.push([
                            meta.value.numerator,
                            meta.value.denominator
                        ]);
                    }
                    break;
            }
        });

        return () => {
            this.bpmStack = [prevBPM];
            this.keyStack = [prevKey];
            this.octaveStack = [prevOctave];
            this.timeSignatureStack = [prevTimeSig];
        };
    }

    // 辅助属性
    private get currentBPM(): number {
        return this.bpmStack[this.bpmStack.length - 1];
    }

    private get currentKey(): string {
        return this.keyStack[this.keyStack.length - 1];
    }

    private get currentOctave(): number {
        return this.octaveStack[this.octaveStack.length - 1];
    }

    private get currentTimeSignature(): [number, number] {
        return this.timeSignatureStack[this.timeSignatureStack.length - 1];
    }

    // MIDI计算逻辑
    private calculateMidiPitch(note: any): number {
        const degree = note.degree - 1;
        const basePitch = NoteUtils.calculateBasePitch(
            degree,
            this.currentKey,
            this.currentOctave - 4
        );
        const midiPitch = NoteUtils.applyAccidental(basePitch, note.accidental);
        return Math.min(Math.max(midiPitch, 0), 127);
    }

    private calculateNoteTicks(note: any): number {
        const beatDuration = NoteUtils.WHOLE_NOTE_DURATION *
            (4 / this.currentTimeSignature[1]);
        const duration = NoteUtils.calculateDuration(note.modifiers) * beatDuration;
        return Math.round(duration * this.ticksPerBeat);
    }

    private calculateRestTicks(rest: any): number {
        const beatDuration = NoteUtils.WHOLE_NOTE_DURATION *
            (4 / this.currentTimeSignature[1]);
        const duration = NoteUtils.calculateDuration(rest.modifiers) * beatDuration;
        return Math.round(duration * this.ticksPerBeat);
    }

    private ticksToDuration(ticks: number): string {
        const wholeTicks = this.ticksPerBeat * 4;
        if (ticks >= wholeTicks) return '1';
        if (ticks >= wholeTicks / 2) return '2';
        if (ticks >= wholeTicks / 4) return '4';
        if (ticks >= wholeTicks / 8) return '8';
        return '16';
    }

    private buildMidiFile(): Buffer {
        const writer = new Writer(this.track);
        return Buffer.from(writer.buildFile());
    }
}