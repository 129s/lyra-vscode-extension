// Generated from .\lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BlockClipContext } from "./lyraParser";
import { AlignedClipContext } from "./lyraParser";
import { UniformClipContext } from "./lyraParser";
import { ReferenceClipContext } from "./lyraParser";
import { NoteLineContext } from "./lyraParser";
import { ClipAlignmentContext } from "./lyraParser";
import { SourceContext } from "./lyraParser";
import { ContentContext } from "./lyraParser";
import { ClipContext } from "./lyraParser";
import { ElementContext } from "./lyraParser";
import { Note_seqContext } from "./lyraParser";
import { AlignmentContext } from "./lyraParser";
import { ReferenceContext } from "./lyraParser";
import { MetadataContext } from "./lyraParser";
import { ValueContext } from "./lyraParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `lyraParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface lyraParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `BlockClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockClip?: (ctx: BlockClipContext) => Result;

	/**
	 * Visit a parse tree produced by the `AlignedClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignedClip?: (ctx: AlignedClipContext) => Result;

	/**
	 * Visit a parse tree produced by the `UniformClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniformClip?: (ctx: UniformClipContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReferenceClip`
	 * labeled alternative in `lyraParser.clip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceClip?: (ctx: ReferenceClipContext) => Result;

	/**
	 * Visit a parse tree produced by the `NoteLine`
	 * labeled alternative in `lyraParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoteLine?: (ctx: NoteLineContext) => Result;

	/**
	 * Visit a parse tree produced by the `ClipAlignment`
	 * labeled alternative in `lyraParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClipAlignment?: (ctx: ClipAlignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource?: (ctx: SourceContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.clip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClip?: (ctx: ClipContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.note_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNote_seq?: (ctx: Note_seqContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.alignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignment?: (ctx: AlignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.metadata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadata?: (ctx: MetadataContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

