// Generated from ./lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { lyraParserListener } from "./lyraParserListener";
import { lyraParserVisitor } from "./lyraParserVisitor";


export class lyraParser extends Parser {
	public static readonly ID = 1;
	public static readonly REST = 2;
	public static readonly NOTE = 3;
	public static readonly EQUALS = 4;
	public static readonly LBRACE = 5;
	public static readonly RBRACE = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LBRACK = 9;
	public static readonly RBRACK = 10;
	public static readonly COLON = 11;
	public static readonly COMMA = 12;
	public static readonly METADATA = 13;
	public static readonly COMMENT = 14;
	public static readonly WS = 15;
	public static readonly VALUE_NUMBER = 16;
	public static readonly VALUE_FRACTION = 17;
	public static readonly VALUE_ID = 18;
	public static readonly VALUE_WS = 19;
	public static readonly RULE_source = 0;
	public static readonly RULE_content = 1;
	public static readonly RULE_clip = 2;
	public static readonly RULE_element = 3;
	public static readonly RULE_note_seq = 4;
	public static readonly RULE_reference = 5;
	public static readonly RULE_metadata = 6;
	public static readonly RULE_value = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "content", "clip", "element", "note_seq", "reference", "metadata", 
		"value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'='", "'{'", "'}'", "'('", 
		"')'", "'['", "']'", "':'", "','", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "REST", "NOTE", "EQUALS", "LBRACE", "RBRACE", "LPAREN", 
		"RPAREN", "LBRACK", "RBRACK", "COLON", "COMMA", "METADATA", "COMMENT", 
		"WS", "VALUE_NUMBER", "VALUE_FRACTION", "VALUE_ID", "VALUE_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lyraParser._LITERAL_NAMES, lyraParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lyraParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "lyraParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return lyraParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return lyraParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(lyraParser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, lyraParser.RULE_source);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.content();
			this.state = 17;
			this.match(lyraParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, lyraParser.RULE_content);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === lyraParser.METADATA) {
				{
				{
				this.state = 19;
				this.metadata();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.ID) | (1 << lyraParser.REST) | (1 << lyraParser.NOTE) | (1 << lyraParser.LBRACE) | (1 << lyraParser.LPAREN) | (1 << lyraParser.LBRACK))) !== 0)) {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case lyraParser.ID:
				case lyraParser.LBRACE:
				case lyraParser.LPAREN:
				case lyraParser.LBRACK:
					{
					this.state = 25;
					this.clip();
					}
					break;
				case lyraParser.REST:
				case lyraParser.NOTE:
					{
					this.state = 26;
					this.element();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clip(): ClipContext {
		let _localctx: ClipContext = new ClipContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, lyraParser.RULE_clip);
		try {
			let _alt: number;
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lyraParser.LBRACE:
				_localctx = new BlockClipContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.match(lyraParser.LBRACE);
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 33;
						this.metadata();
						}
						}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 43;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 39;
					(_localctx as BlockClipContext)._pre = this.content();
					this.state = 40;
					this.match(lyraParser.COLON);
					this.state = 41;
					(_localctx as BlockClipContext)._post = this.content();
					}
					break;
				}
				this.state = 45;
				this.match(lyraParser.RBRACE);
				}
				break;
			case lyraParser.LPAREN:
				_localctx = new AlignedClipContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
				this.match(lyraParser.LPAREN);
				this.state = 51;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 47;
					(_localctx as AlignedClipContext)._pre = this.content();
					this.state = 48;
					this.match(lyraParser.COLON);
					this.state = 49;
					(_localctx as AlignedClipContext)._post = this.content();
					}
					break;
				}
				this.state = 53;
				this.match(lyraParser.RPAREN);
				}
				break;
			case lyraParser.LBRACK:
				_localctx = new UniformClipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.match(lyraParser.LBRACK);
				this.state = 55;
				this.content();
				this.state = 56;
				this.match(lyraParser.RBRACK);
				}
				break;
			case lyraParser.ID:
				_localctx = new ReferenceClipContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.reference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, lyraParser.RULE_element);
		let _la: number;
		try {
			_localctx = new NoteLineContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.note_seq();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lyraParser.COMMA) {
				{
				this.state = 62;
				this.match(lyraParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public note_seq(): Note_seqContext {
		let _localctx: Note_seqContext = new Note_seqContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, lyraParser.RULE_note_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 65;
					_la = this._input.LA(1);
					if (!(_la === lyraParser.REST || _la === lyraParser.NOTE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 68;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, lyraParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(lyraParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadata(): MetadataContext {
		let _localctx: MetadataContext = new MetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, lyraParser.RULE_metadata);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(lyraParser.METADATA);
			this.state = 73;
			this.match(lyraParser.ID);
			this.state = 74;
			this.match(lyraParser.EQUALS);
			this.state = 75;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, lyraParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.VALUE_NUMBER) | (1 << lyraParser.VALUE_FRACTION) | (1 << lyraParser.VALUE_ID))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15R\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03\x17" +
		"\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x03\x03\x07\x03\x1E\n\x03\f\x03" +
		"\x0E\x03!\v\x03\x03\x04\x03\x04\x07\x04%\n\x04\f\x04\x0E\x04(\v\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04.\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x046\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04>\n\x04\x03\x05\x03\x05\x05\x05B\n\x05\x03\x06\x06" +
		"\x06E\n\x06\r\x06\x0E\x06F\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x02\x04\x03\x02\x04\x05\x03\x02\x12\x14\x02T\x02" +
		"\x12\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06=\x03\x02\x02\x02\b?\x03" +
		"\x02\x02\x02\nD\x03\x02\x02\x02\fH\x03\x02\x02\x02\x0EJ\x03\x02\x02\x02" +
		"\x10O\x03\x02\x02\x02\x12\x13\x05\x04\x03\x02\x13\x14\x07\x02\x02\x03" +
		"\x14\x03\x03\x02\x02\x02\x15\x17\x05\x0E\b\x02\x16\x15\x03\x02\x02\x02" +
		"\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02" +
		"\x19\x1F\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1E\x05\x06\x04\x02" +
		"\x1C\x1E\x05\b\x05\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02\x02\x02" +
		"\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x05" +
		"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"&\x07\x07\x02\x02#%\x05\x0E\b\x02" +
		"$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02" +
		"\x02\'-\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x05\x04\x03\x02*+\x07\r\x02" +
		"\x02+,\x05\x04\x03\x02,.\x03\x02\x02\x02-)\x03\x02\x02\x02-.\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/>\x07\b\x02\x0205\x07\t\x02\x0212\x05\x04\x03\x02" +
		"23\x07\r\x02\x0234\x05\x04\x03\x0246\x03\x02\x02\x0251\x03\x02\x02\x02" +
		"56\x03\x02\x02\x0267\x03\x02\x02\x027>\x07\n\x02\x0289\x07\v\x02\x029" +
		":\x05\x04\x03\x02:;\x07\f\x02\x02;>\x03\x02\x02\x02<>\x05\f\x07\x02=\"" +
		"\x03\x02\x02\x02=0\x03\x02\x02\x02=8\x03\x02\x02\x02=<\x03\x02\x02\x02" +
		">\x07\x03\x02\x02\x02?A\x05\n\x06\x02@B\x07\x0E\x02\x02A@\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02B\t\x03\x02\x02\x02CE\t\x02\x02\x02DC\x03\x02\x02" +
		"\x02EF\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\v\x03\x02" +
		"\x02\x02HI\x07\x03\x02\x02I\r\x03\x02\x02\x02JK\x07\x0F\x02\x02KL\x07" +
		"\x03\x02\x02LM\x07\x06\x02\x02MN\x05\x10\t\x02N\x0F\x03\x02\x02\x02OP" +
		"\t\x03\x02\x02P\x11\x03\x02\x02\x02\v\x18\x1D\x1F&-5=AF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lyraParser.__ATN) {
			lyraParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lyraParser._serializedATN));
		}

		return lyraParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public content(): ContentContext {
		return this.getRuleContext(0, ContentContext);
	}
	public EOF(): TerminalNode { return this.getToken(lyraParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_source; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentContext extends ParserRuleContext {
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public clip(): ClipContext[];
	public clip(i: number): ClipContext;
	public clip(i?: number): ClipContext | ClipContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClipContext);
		} else {
			return this.getRuleContext(i, ClipContext);
		}
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_content; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClipContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_clip; }
	public copyFrom(ctx: ClipContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockClipContext extends ClipContext {
	public _pre!: ContentContext;
	public _post!: ContentContext;
	public LBRACE(): TerminalNode { return this.getToken(lyraParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(lyraParser.RBRACE, 0); }
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(lyraParser.COLON, 0); }
	public content(): ContentContext[];
	public content(i: number): ContentContext;
	public content(i?: number): ContentContext | ContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentContext);
		} else {
			return this.getRuleContext(i, ContentContext);
		}
	}
	constructor(ctx: ClipContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterBlockClip) {
			listener.enterBlockClip(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitBlockClip) {
			listener.exitBlockClip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitBlockClip) {
			return visitor.visitBlockClip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlignedClipContext extends ClipContext {
	public _pre!: ContentContext;
	public _post!: ContentContext;
	public LPAREN(): TerminalNode { return this.getToken(lyraParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(lyraParser.RPAREN, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(lyraParser.COLON, 0); }
	public content(): ContentContext[];
	public content(i: number): ContentContext;
	public content(i?: number): ContentContext | ContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentContext);
		} else {
			return this.getRuleContext(i, ContentContext);
		}
	}
	constructor(ctx: ClipContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterAlignedClip) {
			listener.enterAlignedClip(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitAlignedClip) {
			listener.exitAlignedClip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitAlignedClip) {
			return visitor.visitAlignedClip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UniformClipContext extends ClipContext {
	public LBRACK(): TerminalNode { return this.getToken(lyraParser.LBRACK, 0); }
	public content(): ContentContext {
		return this.getRuleContext(0, ContentContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(lyraParser.RBRACK, 0); }
	constructor(ctx: ClipContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterUniformClip) {
			listener.enterUniformClip(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitUniformClip) {
			listener.exitUniformClip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitUniformClip) {
			return visitor.visitUniformClip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferenceClipContext extends ClipContext {
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(ctx: ClipContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterReferenceClip) {
			listener.enterReferenceClip(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitReferenceClip) {
			listener.exitReferenceClip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitReferenceClip) {
			return visitor.visitReferenceClip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_element; }
	public copyFrom(ctx: ElementContext): void {
		super.copyFrom(ctx);
	}
}
export class NoteLineContext extends ElementContext {
	public note_seq(): Note_seqContext {
		return this.getRuleContext(0, Note_seqContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(lyraParser.COMMA, 0); }
	constructor(ctx: ElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterNoteLine) {
			listener.enterNoteLine(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitNoteLine) {
			listener.exitNoteLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitNoteLine) {
			return visitor.visitNoteLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Note_seqContext extends ParserRuleContext {
	public NOTE(): TerminalNode[];
	public NOTE(i: number): TerminalNode;
	public NOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lyraParser.NOTE);
		} else {
			return this.getToken(lyraParser.NOTE, i);
		}
	}
	public REST(): TerminalNode[];
	public REST(i: number): TerminalNode;
	public REST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lyraParser.REST);
		} else {
			return this.getToken(lyraParser.REST, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_note_seq; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterNote_seq) {
			listener.enterNote_seq(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitNote_seq) {
			listener.exitNote_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitNote_seq) {
			return visitor.visitNote_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(lyraParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_reference; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	public METADATA(): TerminalNode { return this.getToken(lyraParser.METADATA, 0); }
	public ID(): TerminalNode { return this.getToken(lyraParser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(lyraParser.EQUALS, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_metadata; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterMetadata) {
			listener.enterMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitMetadata) {
			listener.exitMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitMetadata) {
			return visitor.visitMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public VALUE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(lyraParser.VALUE_NUMBER, 0); }
	public VALUE_FRACTION(): TerminalNode | undefined { return this.tryGetToken(lyraParser.VALUE_FRACTION, 0); }
	public VALUE_ID(): TerminalNode | undefined { return this.tryGetToken(lyraParser.VALUE_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_value; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


