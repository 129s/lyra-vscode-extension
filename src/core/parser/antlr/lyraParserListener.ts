// Generated from ./lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BlockClipContext } from "./lyraParser";
import { AlignedClipContext } from "./lyraParser";
import { UniformClipContext } from "./lyraParser";
import { ReferenceClipContext } from "./lyraParser";
import { NoteLineContext } from "./lyraParser";
import { SourceContext } from "./lyraParser";
import { ContentContext } from "./lyraParser";
import { ClipContext } from "./lyraParser";
import { ElementContext } from "./lyraParser";
import { Note_seqContext } from "./lyraParser";
import { AlignmentExpressionContext } from "./lyraParser";
import { ReferenceContext } from "./lyraParser";
import { MetadataContext } from "./lyraParser";
import { ValueContext } from "./lyraParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `lyraParser`.
 */
export interface lyraParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `BlockClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	enterBlockClip?: (ctx: BlockClipContext) => void;
	/**
	 * Exit a parse tree produced by the `BlockClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	exitBlockClip?: (ctx: BlockClipContext) => void;

	/**
	 * Enter a parse tree produced by the `AlignedClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	enterAlignedClip?: (ctx: AlignedClipContext) => void;
	/**
	 * Exit a parse tree produced by the `AlignedClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	exitAlignedClip?: (ctx: AlignedClipContext) => void;

	/**
	 * Enter a parse tree produced by the `UniformClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	enterUniformClip?: (ctx: UniformClipContext) => void;
	/**
	 * Exit a parse tree produced by the `UniformClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	exitUniformClip?: (ctx: UniformClipContext) => void;

	/**
	 * Enter a parse tree produced by the `ReferenceClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	enterReferenceClip?: (ctx: ReferenceClipContext) => void;
	/**
	 * Exit a parse tree produced by the `ReferenceClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	exitReferenceClip?: (ctx: ReferenceClipContext) => void;

	/**
	 * Enter a parse tree produced by the `NoteLine`
	 * labeled alternative in `lyraParser.element`.
	 * @param ctx the parse tree
	 */
	enterNoteLine?: (ctx: NoteLineContext) => void;
	/**
	 * Exit a parse tree produced by the `NoteLine`
	 * labeled alternative in `lyraParser.element`.
	 * @param ctx the parse tree
	 */
	exitNoteLine?: (ctx: NoteLineContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.source`.
	 * @param ctx the parse tree
	 */
	enterSource?: (ctx: SourceContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.source`.
	 * @param ctx the parse tree
	 */
	exitSource?: (ctx: SourceContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	enterClip?: (ctx: ClipContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.clip`.
	 * @param ctx the parse tree
	 */
	exitClip?: (ctx: ClipContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.note_seq`.
	 * @param ctx the parse tree
	 */
	enterNote_seq?: (ctx: Note_seqContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.note_seq`.
	 * @param ctx the parse tree
	 */
	exitNote_seq?: (ctx: Note_seqContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.alignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAlignmentExpression?: (ctx: AlignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.alignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAlignmentExpression?: (ctx: AlignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.metadata`.
	 * @param ctx the parse tree
	 */
	enterMetadata?: (ctx: MetadataContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.metadata`.
	 * @param ctx the parse tree
	 */
	exitMetadata?: (ctx: MetadataContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

