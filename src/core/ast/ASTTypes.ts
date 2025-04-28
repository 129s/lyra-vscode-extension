
/**
 * Lyra抽象语法树完整类型定义
 */

// 基础位置信息（用于错误定位）
export interface SourcePosition {
    line: number;
    column: number;
    startOffset: number;
    endOffset: number;
}

// 基础节点类型
interface BaseNode {
    type: string;
    position?: SourcePosition; // 可选位置信息
}

// 元数据类型
export interface Metadata extends BaseNode {
    type: 'Metadata';
    key: string;
    value: MetadataValue;
}

export type MetadataValue =
    | { type: 'number'; value: number }
    | { type: 'fraction'; numerator: number; denominator: number }
    | { type: 'string'; value: string }
    | { type: 'boolean'; value: boolean };

// 音符类型
export interface Note extends BaseNode {
    type: 'Note';
    degree: number;       // 1-7
    accidental?: '#' | 'b';
    modifiers: string;    // 时值修饰符如"++-"
    raw: string;          // 原始字符串
}

export interface Rest extends BaseNode {
    type: 'Rest';
    modifiers: string;
    raw: string;
}

// 元素类型
export type Element = NoteLine;

export interface NoteLine extends BaseNode {
    type: 'NoteLine';
    items: Array<Note | Rest>;
    trailingComma: boolean;
}

export interface Fraction {
    numerator: number;
    denominator: number;
}

// 片段类型
export type Clip = BlockClip | AlignedClip | UniformClip | ReferenceClip;

export interface BlockClip extends BaseNode {
    type: 'BlockClip';
    metadata: Metadata[];
    content: Content;
}

export interface AlignedClip extends BaseNode {
    type: 'AlignedClip';
    content: Content;
    alignPosition?: number;  // 对齐位置
}
export interface UniformClip extends BaseNode {
    type: 'UniformClip';
    content: Content;
}

export interface ReferenceClip extends BaseNode {
    type: 'ReferenceClip';
    identifier: string;
}

// 内容结构
export interface Content extends BaseNode {
    type: 'Content';
    metadata: Metadata[];
    clips: Clip[];
    elements: Element[];
}

// 根节点
export interface Root extends BaseNode {
    type: 'Root';
    content: Content;
}

// 类型守卫函数
export function isBlockClip(node: Clip): node is BlockClip {
    return node.type === 'BlockClip';
}

export function isNoteLine(element: Element): element is NoteLine {
    return element.type === 'NoteLine';
}

// 类型辅助工具
export type ASTNode =
    | Root
    | Content
    | Metadata
    | Clip
    | Element
    | Note
    | Rest;