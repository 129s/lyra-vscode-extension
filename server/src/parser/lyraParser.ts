// Generated from lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly NOTE = 2;
	public static readonly EQUALS = 3;
	public static readonly LBRACE = 4;
	public static readonly RBRACE = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly LBRACK = 8;
	public static readonly RBRACK = 9;
	public static readonly COLON = 10;
	public static readonly COMMA = 11;
	public static readonly METADATA = 12;
	public static readonly COMMENT = 13;
	public static readonly WS = 14;
	public static readonly VALUE_NUMBER = 15;
	public static readonly VALUE_SIGNATURE = 16;
	public static readonly VALUE_ID = 17;
	public static readonly VALUE_WS = 18;
	public static readonly RULE_source = 0;
	public static readonly RULE_content = 1;
	public static readonly RULE_clip = 2;
	public static readonly RULE_segment = 3;
	public static readonly RULE_unit = 4;
	public static readonly RULE_alignment = 5;
	public static readonly RULE_padding = 6;
	public static readonly RULE_reference = 7;
	public static readonly RULE_metadata = 8;
	public static readonly RULE_value = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "content", "clip", "segment", "unit", "alignment", "padding",
		"reference", "metadata", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'='", "'{'", "'}'", "'('", "')'", "'['",
		"']'", "':'", "','", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "NOTE", "EQUALS", "LBRACE", "RBRACE", "LPAREN", "RPAREN",
		"LBRACK", "RBRACK", "COLON", "COMMA", "METADATA", "COMMENT", "WS", "VALUE_NUMBER",
		"VALUE_SIGNATURE", "VALUE_ID", "VALUE_WS",
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
				this.state = 20;
				this.content();
				this.state = 21;
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
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === lyraParser.METADATA) {
					{
						{
							this.state = 23;
							this.metadata();
						}
					}
					this.state = 28;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.ID) | (1 << lyraParser.NOTE) | (1 << lyraParser.LBRACE) | (1 << lyraParser.LPAREN) | (1 << lyraParser.LBRACK) | (1 << lyraParser.COMMA))) !== 0)) {
					{
						this.state = 29;
						this.clip();
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
	public clip(): ClipContext {
		let _localctx: ClipContext = new ClipContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, lyraParser.RULE_clip);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 32;
				this.segment();
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === lyraParser.COLON) {
					{
						this.state = 33;
						this.alignment();
						this.state = 34;
						this.segment();
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
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, lyraParser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 40;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case lyraParser.ID:
							case lyraParser.NOTE:
							case lyraParser.LBRACE:
							case lyraParser.LPAREN:
							case lyraParser.LBRACK:
								{
									this.state = 38;
									this.unit();
								}
								break;
							case lyraParser.COMMA:
								{
									this.state = 39;
									this.padding();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.ID) | (1 << lyraParser.NOTE) | (1 << lyraParser.LBRACE) | (1 << lyraParser.LPAREN) | (1 << lyraParser.LBRACK) | (1 << lyraParser.COMMA))) !== 0));
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
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, lyraParser.RULE_unit);
		try {
			let _alt: number;
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case lyraParser.LBRACE:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 44;
						this.match(lyraParser.LBRACE);
						this.state = 45;
						this.content();
						this.state = 46;
						this.match(lyraParser.RBRACE);
					}
					break;
				case lyraParser.LPAREN:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 48;
						this.match(lyraParser.LPAREN);
						this.state = 49;
						this.content();
						this.state = 50;
						this.match(lyraParser.RPAREN);
					}
					break;
				case lyraParser.LBRACK:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 52;
						this.match(lyraParser.LBRACK);
						this.state = 53;
						this.content();
						this.state = 54;
						this.match(lyraParser.RBRACK);
					}
					break;
				case lyraParser.ID:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 56;
						this.reference();
					}
					break;
				case lyraParser.NOTE:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 58;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1:
									{
										{
											this.state = 57;
											this.match(lyraParser.NOTE);
										}
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
							this.state = 60;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public alignment(): AlignmentContext {
		let _localctx: AlignmentContext = new AlignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, lyraParser.RULE_alignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 64;
				this.match(lyraParser.COLON);
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
	public padding(): PaddingContext {
		let _localctx: PaddingContext = new PaddingContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, lyraParser.RULE_padding);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 66;
				this.match(lyraParser.COMMA);
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
		this.enterRule(_localctx, 14, lyraParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 68;
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
		this.enterRule(_localctx, 16, lyraParser.RULE_metadata);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 70;
				this.match(lyraParser.METADATA);
				this.state = 71;
				this.match(lyraParser.ID);
				this.state = 72;
				this.match(lyraParser.EQUALS);
				this.state = 73;
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
		this.enterRule(_localctx, 18, lyraParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 75;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.VALUE_NUMBER) | (1 << lyraParser.VALUE_SIGNATURE) | (1 << lyraParser.VALUE_ID))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14P\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03\x1B\n\x03\f\x03\x0E\x03\x1E\v\x03\x03\x03\x05\x03!\n" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\'\n\x04\x03\x05\x03\x05\x06" +
		"\x05+\n\x05\r\x05\x0E\x05,\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06" +
		"\x06=\n\x06\r\x06\x0E\x06>\x05\x06A\n\x06\x03\x07\x03\x07\x03\b\x03\b" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x02\x02\x02" +
		"\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x02\x03\x03\x02\x11\x13\x02O\x02\x16\x03\x02\x02\x02\x04\x1C\x03" +
		"\x02\x02\x02\x06\"\x03\x02\x02\x02\b*\x03\x02\x02\x02\n@\x03\x02\x02\x02" +
		"\fB\x03\x02\x02\x02\x0ED\x03\x02\x02\x02\x10F\x03\x02\x02\x02\x12H\x03" +
		"\x02\x02\x02\x14M\x03\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x18\x07" +
		"\x02\x02\x03\x18\x03\x03\x02\x02\x02\x19\x1B\x05\x12\n\x02\x1A\x19\x03" +
		"\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03" +
		"\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1F!\x05\x06" +
		"\x04\x02 \x1F\x03\x02\x02\x02 !\x03\x02\x02\x02!\x05\x03\x02\x02\x02\"" +
		"&\x05\b\x05\x02#$\x05\f\x07\x02$%\x05\b\x05\x02%\'\x03\x02\x02\x02&#\x03" +
		"\x02\x02\x02&\'\x03\x02\x02\x02\'\x07\x03\x02\x02\x02(+\x05\n\x06\x02" +
		")+\x05\x0E\b\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02" +
		",*\x03\x02\x02\x02,-\x03\x02\x02\x02-\t\x03\x02\x02\x02./\x07\x06\x02" +
		"\x02/0\x05\x04\x03\x0201\x07\x07\x02\x021A\x03\x02\x02\x0223\x07\b\x02" +
		"\x0234\x05\x04\x03\x0245\x07\t\x02\x025A\x03\x02\x02\x0267\x07\n\x02\x02" +
		"78\x05\x04\x03\x0289\x07\v\x02\x029A\x03\x02\x02\x02:A\x05\x10\t\x02;" +
		"=\x07\x04\x02\x02<;\x03\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?A\x03\x02\x02\x02@.\x03\x02\x02\x02@2\x03\x02\x02\x02" +
		"@6\x03\x02\x02\x02@:\x03\x02\x02\x02@<\x03\x02\x02\x02A\v\x03\x02\x02" +
		"\x02BC\x07\f\x02\x02C\r\x03\x02\x02\x02DE\x07\r\x02\x02E\x0F\x03\x02\x02" +
		"\x02FG\x07\x03\x02\x02G\x11\x03\x02\x02\x02HI\x07\x0E\x02\x02IJ\x07\x03" +
		"\x02\x02JK\x07\x05\x02\x02KL\x05\x14\v\x02L\x13\x03\x02\x02\x02MN\t\x02" +
		"\x02\x02N\x15\x03\x02\x02\x02\t\x1C &*,>@";
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
	public clip(): ClipContext | undefined {
		return this.tryGetRuleContext(0, ClipContext);
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
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	public alignment(): AlignmentContext | undefined {
		return this.tryGetRuleContext(0, AlignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_clip; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterClip) {
			listener.enterClip(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitClip) {
			listener.exitClip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitClip) {
			return visitor.visitClip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public unit(): UnitContext[];
	public unit(i: number): UnitContext;
	public unit(i?: number): UnitContext | UnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitContext);
		} else {
			return this.getRuleContext(i, UnitContext);
		}
	}
	public padding(): PaddingContext[];
	public padding(i: number): PaddingContext;
	public padding(i?: number): PaddingContext | PaddingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PaddingContext);
		} else {
			return this.getRuleContext(i, PaddingContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_segment; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(lyraParser.LBRACE, 0); }
	public content(): ContentContext | undefined {
		return this.tryGetRuleContext(0, ContentContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(lyraParser.RBRACE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(lyraParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(lyraParser.RPAREN, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(lyraParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(lyraParser.RBRACK, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public NOTE(): TerminalNode[];
	public NOTE(i: number): TerminalNode;
	public NOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lyraParser.NOTE);
		} else {
			return this.getToken(lyraParser.NOTE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_unit; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignmentContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(lyraParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_alignment; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterAlignment) {
			listener.enterAlignment(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitAlignment) {
			listener.exitAlignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitAlignment) {
			return visitor.visitAlignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PaddingContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(lyraParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lyraParser.RULE_padding; }
	// @Override
	public enterRule(listener: lyraParserListener): void {
		if (listener.enterPadding) {
			listener.enterPadding(this);
		}
	}
	// @Override
	public exitRule(listener: lyraParserListener): void {
		if (listener.exitPadding) {
			listener.exitPadding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lyraParserVisitor<Result>): Result {
		if (visitor.visitPadding) {
			return visitor.visitPadding(this);
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
	public VALUE_SIGNATURE(): TerminalNode | undefined { return this.tryGetToken(lyraParser.VALUE_SIGNATURE, 0); }
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


