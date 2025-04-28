import { Root } from '../ast/ASTTypes';
import { NoteUtils } from '../utils/NoteUtils';
import { Writer } from 'midi-writer-js/build/types/writer';
import { Track } from 'midi-writer-js/build/types/chunks/track';
import { NoteEvent } from 'midi-writer-js/build/types/midi-events/note-event';

export class MidiGenerator {
    private readonly ticksPerBeat = 960; // MIDI时间分辨率
    private currentTicks = 0;
    private track!: Track;

    // 全局音乐参数
    private bpm = NoteUtils.DEFAULT_BPM;
    private key = 'C';
    private octave = 4;
    private timeSignature: [number, number] = [4, 4];

    generate(ast: Root): Buffer {
        this.initializeTrack();
        this.extractGlobalMetadata(ast.content.metadata);
        this.processContent(ast.content);
        return this.buildMidiFile();
    }

    private initializeTrack() {
        this.track = new Track();
        this.track.setTimeSignature(
            this.timeSignature[0],
            this.timeSignature[1],
            24,
            8
        );
        this.track.setTempo(this.bpm);
    }

    private extractGlobalMetadata(metadataList: any[]) {
        metadataList.forEach(meta => {
            switch (meta.key.toLowerCase()) {
                case 'bpm':
                    this.bpm = meta.value.value;
                    break;
                case 'key':
                    const keyInfo = NoteUtils.parseKeyMetadata([meta]);
                    this.key = keyInfo.key;
                    this.octave = keyInfo.octave;
                    break;
                case 'meter':
                    this.timeSignature = [meta.value.numerator, meta.value.denominator];
                    break;
            }
        });
    }

    private processContent(content: any) {
        content.elements.forEach((element: any) => {
            if (element.type === 'NoteLine') {
                this.processNoteLine(element);
            }
        });
    }

    private processNoteLine(noteLine: any) {
        noteLine.items.forEach((item: any) => {
            if (item.type === 'Note') {
                this.addNoteEvent(item);
            } else if (item.type === 'Rest') {
                this.addRest(item);
            }
        });
    }

    private addNoteEvent(note: any) {
        const midiPitch = this.calculateMidiPitch(note);
        const durationTicks = this.calculateDurationTicks(note);

        // 使用 NoteEvent 类创建事件
        const event = new NoteEvent({
            pitch: midiPitch.toString(), // 例如 "C4"
            duration: this.ticksToDuration(durationTicks),
            velocity: 100,
            startTick: this.currentTicks
        });

        this.track.addEvent(event);
        this.currentTicks += durationTicks;
    }

    private addRest(rest: any) {
        const durationTicks = this.calculateRestTicks(rest);
        this.currentTicks += durationTicks;
    }

    private calculateMidiPitch(note: any): number {
        const degree = note.degree - 1; // 转换为0-based
        const basePitch = NoteUtils.calculateBasePitch(degree, this.key, this.octave - 4);
        return NoteUtils.applyAccidental(basePitch, note.accidental);
    }

    private calculateDurationTicks(note: any): number {
        const beatDuration = NoteUtils.WHOLE_NOTE_DURATION * (4 / this.timeSignature[1]);
        const duration = NoteUtils.calculateDuration(note.modifiers) * beatDuration;
        return Math.round(duration * this.ticksPerBeat);
    }

    private calculateRestTicks(rest: any): number {
        const modifiers = rest.modifiers;
        const beatDuration = NoteUtils.WHOLE_NOTE_DURATION * (4 / this.timeSignature[1]);
        const duration = NoteUtils.calculateDuration(modifiers) * beatDuration;
        return Math.round(duration * this.ticksPerBeat);
    }

    private ticksToDuration(ticks: number): string {
        const wholeNoteTicks = this.ticksPerBeat * 4;
        const fractions = [
            { value: wholeNoteTicks, name: '1' },     // 全音符
            { value: wholeNoteTicks / 2, name: '2' },   // 二分音符
            { value: wholeNoteTicks / 4, name: '4' },   // 四分音符
            { value: wholeNoteTicks / 8, name: '8' },   // 八分音符
            { value: wholeNoteTicks / 16, name: '16' }, // 十六分音符
        ];

        for (const frac of fractions) {
            if (ticks >= frac.value) {
                const dots = Math.floor(Math.log2(ticks / frac.value) * 2);
                return `${frac.name}${dots > 0 ? 'd' + dots : ''}`;
            }
        }
        return '32'; // 默认32分音符
    }

    private buildMidiFile(): Buffer {
        const writer = new Writer(this.track);
        return Buffer.from(writer.buildFile());
    }
}