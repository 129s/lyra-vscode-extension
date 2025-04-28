export interface ClipNode {
    type: 'Clip';
    name?: string;
    properties: {
        tempo?: number;
        meter?: [number, number]; // 如 [4,4]
        key?: string;            // 如 "Eb"
        unit?: number;           // 单位时间（如 0.25 表示1/4小节）
    };
    children: (ClipNode | NoteSequence | AlignedGroup)[];
    startOffset?: number;      // 由冒号:指定的起始偏移
}

export interface NoteSequence {
    type: 'NoteSequence';
    notes: (Note | Rest)[];
    durationPerNote: number;   // 每个音符的时长（秒）
}

export interface AlignedGroup {
    type: 'AlignedGroup';
    clips: ClipNode[];
}

export interface Note {
    type: 'Note';
    pitch: number;             // MIDI编号（如 60=C4）
    duration: number;          // 时长（秒）
}

export interface Rest {
    type: 'Rest';
    duration: number;
}