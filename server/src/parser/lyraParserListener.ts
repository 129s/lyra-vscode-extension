// Generated from lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `lyraParser`.
 */
export interface lyraParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `lyraParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.alignment`.
	 * @param ctx the parse tree
	 */
	enterAlignment?: (ctx: AlignmentContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.alignment`.
	 * @param ctx the parse tree
	 */
	exitAlignment?: (ctx: AlignmentContext) => void;

	/**
	 * Enter a parse tree produced by `lyraParser.padding`.
	 * @param ctx the parse tree
	 */
	enterPadding?: (ctx: PaddingContext) => void;
	/**
	 * Exit a parse tree produced by `lyraParser.padding`.
	 * @param ctx the parse tree
	 */
	exitPadding?: (ctx: PaddingContext) => void;

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

