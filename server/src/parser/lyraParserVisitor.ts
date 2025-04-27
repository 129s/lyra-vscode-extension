// Generated from lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourceContext } from "./lyraParser";
import { ContentContext } from "./lyraParser";
import { ClipContext } from "./lyraParser";
import { SegmentContext } from "./lyraParser";
import { UnitContext } from "./lyraParser";
import { AlignmentContext } from "./lyraParser";
import { PaddingContext } from "./lyraParser";
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
	 * Visit a parse tree produced by `lyraParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.alignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignment?: (ctx: AlignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `lyraParser.padding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPadding?: (ctx: PaddingContext) => Result;

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

