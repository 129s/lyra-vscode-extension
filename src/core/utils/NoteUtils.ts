import { Metadata } from "../ast/ASTTypes";

type NoteParseResult = {
    midiPitch: number;
    duration: number;
    velocity?: number;
};
export class NoteUtils {
    public static readonly SCALE_DEGREES = [0, 2, 4, 5, 7, 9, 11]; // C大调音阶半音数 (C=0)
    public static readonly BASE_OCTAVE = 4;
    public static readonly DEFAULT_BPM = 120;
    public static readonly WHOLE_NOTE_DURATION = (60 / this.DEFAULT_BPM) * 4;

    /**
     * 解析Lyra音符语法为MIDI参数
     * @example "4#++" -> { midiPitch: 61, duration: 2.25 }
     */
    static parseNote(
        noteStr: string,
        key: string = "C",
        octaveOffset: number = 0
    ): NoteParseResult {
        const match = noteStr.match(/^([1-7])([b#])?([+-]*)$/);
        if (!match) {
            throw new Error(`Invalid note syntax: ${noteStr}`);
        }

        const [, degreeStr, accidental, modifiers] = match;
        const degree = parseInt(degreeStr) - 1; // 转为0-based索引

        // 计算基准音高（考虑调性）
        const basePitch = this.calculateBasePitch(degree, key, octaveOffset);

        // 应用升降号
        const adjustedPitch = this.applyAccidental(basePitch, accidental);

        // 计算时值
        const duration = this.calculateDuration(modifiers);

        return {
            midiPitch: adjustedPitch,
            duration: duration * this.WHOLE_NOTE_DURATION,
        };
    }

    /**
     * 根据调性计算基准音高
     */
    public static calculateBasePitch(
        degree: number,
        key: string,
        octaveOffset: number
    ): number {
        const keyOffset = this.getKeyOffset(key);
        const scaleIndex = (degree + keyOffset) % 7;
        const octaves = Math.floor((degree + keyOffset) / 7);

        return (
            this.SCALE_DEGREES[scaleIndex] +
            (this.BASE_OCTAVE + octaves + octaveOffset) * 12
        );
    }

    /**
     * 获取调性偏移量（C=0, G=1, F=-1等）
     */
    public static getKeyOffset(key: string): number {
        const circleOfFifths: Record<string, number> = {
            C: 0, G: 1, D: 2, A: 3, E: 4, B: 5, "F#": 6,
            F: -1, Bb: -2, Eb: -3, Ab: -4, Db: -5, Gb: -6
        };
        return circleOfFifths[key.toUpperCase()] ?? 0;
    }

    /**
     * 应用升降号
     */
    static applyAccidental(basePitch: number, accidental?: string): number {
        switch (accidental) {
            case "#": return basePitch + 1;
            case "b": return basePitch - 1;
            default: return basePitch;
        }
    }

    /**
     * 计算音符时值（基于四分音符为单位）
     */
    static calculateDuration(modifiers: string): number {
        let duration = 1; // 基础四分音符
        let dots = 0;

        Array.from(modifiers).forEach(c => {
            if (c === "+") dots += 1;
            if (c === "-") duration *= 2 / 3; // 三连音
        });

        // 附点计算公式：d * (2 - 1/2^n)
        if (dots > 0) {
            duration *= 2 - Math.pow(0.5, dots);
        }

        return duration;
    }

    /**
     * 解析调性元数据（如@key=Gb）
     */
    static parseKeyMetadata(metadata: Metadata[]): { key: string; octave: number } {
        const defaultKey = { key: "C", octave: 4 };
        const keyMeta = metadata.find(m => m.key.toLowerCase() === "key");

        if (!keyMeta || keyMeta.value.type !== 'string') return defaultKey;

        const valueStr = keyMeta.value.value;
        const match = valueStr.match(/^([A-Ga-g][b#]?)(-?\d+)?$/);
        if (!match) return defaultKey;

        return {
            key: match[1].toUpperCase(),
            octave: match[2] ? parseInt(match[2]) : 4
        };
    }
}