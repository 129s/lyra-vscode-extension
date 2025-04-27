"use strict";
// Generated from lyraParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueContext = exports.MetadataContext = exports.ReferenceContext = exports.PaddingContext = exports.AlignmentContext = exports.UnitContext = exports.SegmentContext = exports.ClipContext = exports.ContentContext = exports.SourceContext = exports.lyraParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class lyraParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return lyraParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "lyraParser.g4"; }
    // @Override
    get ruleNames() { return lyraParser.ruleNames; }
    // @Override
    get serializedATN() { return lyraParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(lyraParser._ATN, this);
    }
    // @RuleVersion(0)
    source() {
        let _localctx = new SourceContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    content() {
        let _localctx = new ContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, lyraParser.RULE_content);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    clip() {
        let _localctx = new ClipContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, lyraParser.RULE_clip);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    segment() {
        let _localctx = new SegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, lyraParser.RULE_segment);
        let _la;
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
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 42;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.ID) | (1 << lyraParser.NOTE) | (1 << lyraParser.LBRACE) | (1 << lyraParser.LPAREN) | (1 << lyraParser.LBRACK) | (1 << lyraParser.COMMA))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unit() {
        let _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, lyraParser.RULE_unit);
        try {
            let _alt;
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
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 60;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alignment() {
        let _localctx = new AlignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, lyraParser.RULE_alignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.match(lyraParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    padding() {
        let _localctx = new PaddingContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, lyraParser.RULE_padding);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(lyraParser.COMMA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reference() {
        let _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, lyraParser.RULE_reference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.match(lyraParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    metadata() {
        let _localctx = new MetadataContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, lyraParser.RULE_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lyraParser.VALUE_NUMBER) | (1 << lyraParser.VALUE_SIGNATURE) | (1 << lyraParser.VALUE_ID))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!lyraParser.__ATN) {
            lyraParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lyraParser._serializedATN));
        }
        return lyraParser.__ATN;
    }
}
exports.lyraParser = lyraParser;
lyraParser.ID = 1;
lyraParser.NOTE = 2;
lyraParser.EQUALS = 3;
lyraParser.LBRACE = 4;
lyraParser.RBRACE = 5;
lyraParser.LPAREN = 6;
lyraParser.RPAREN = 7;
lyraParser.LBRACK = 8;
lyraParser.RBRACK = 9;
lyraParser.COLON = 10;
lyraParser.COMMA = 11;
lyraParser.METADATA = 12;
lyraParser.COMMENT = 13;
lyraParser.WS = 14;
lyraParser.VALUE_NUMBER = 15;
lyraParser.VALUE_SIGNATURE = 16;
lyraParser.VALUE_ID = 17;
lyraParser.VALUE_WS = 18;
lyraParser.RULE_source = 0;
lyraParser.RULE_content = 1;
lyraParser.RULE_clip = 2;
lyraParser.RULE_segment = 3;
lyraParser.RULE_unit = 4;
lyraParser.RULE_alignment = 5;
lyraParser.RULE_padding = 6;
lyraParser.RULE_reference = 7;
lyraParser.RULE_metadata = 8;
lyraParser.RULE_value = 9;
// tslint:disable:no-trailing-whitespace
lyraParser.ruleNames = [
    "source", "content", "clip", "segment", "unit", "alignment", "padding",
    "reference", "metadata", "value",
];
lyraParser._LITERAL_NAMES = [
    undefined, undefined, undefined, "'='", "'{'", "'}'", "'('", "')'", "'['",
    "']'", "':'", "','", "'@'",
];
lyraParser._SYMBOLIC_NAMES = [
    undefined, "ID", "NOTE", "EQUALS", "LBRACE", "RBRACE", "LPAREN", "RPAREN",
    "LBRACK", "RBRACK", "COLON", "COMMA", "METADATA", "COMMENT", "WS", "VALUE_NUMBER",
    "VALUE_SIGNATURE", "VALUE_ID", "VALUE_WS",
];
lyraParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lyraParser._LITERAL_NAMES, lyraParser._SYMBOLIC_NAMES, []);
lyraParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14P\x04\x02" +
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
class SourceContext extends ParserRuleContext_1.ParserRuleContext {
    content() {
        return this.getRuleContext(0, ContentContext);
    }
    EOF() { return this.getToken(lyraParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_source; }
    // @Override
    enterRule(listener) {
        if (listener.enterSource) {
            listener.enterSource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSource) {
            listener.exitSource(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSource) {
            return visitor.visitSource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceContext = SourceContext;
class ContentContext extends ParserRuleContext_1.ParserRuleContext {
    metadata(i) {
        if (i === undefined) {
            return this.getRuleContexts(MetadataContext);
        }
        else {
            return this.getRuleContext(i, MetadataContext);
        }
    }
    clip() {
        return this.tryGetRuleContext(0, ClipContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_content; }
    // @Override
    enterRule(listener) {
        if (listener.enterContent) {
            listener.enterContent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContent) {
            listener.exitContent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContent) {
            return visitor.visitContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContentContext = ContentContext;
class ClipContext extends ParserRuleContext_1.ParserRuleContext {
    segment(i) {
        if (i === undefined) {
            return this.getRuleContexts(SegmentContext);
        }
        else {
            return this.getRuleContext(i, SegmentContext);
        }
    }
    alignment() {
        return this.tryGetRuleContext(0, AlignmentContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_clip; }
    // @Override
    enterRule(listener) {
        if (listener.enterClip) {
            listener.enterClip(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClip) {
            listener.exitClip(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClip) {
            return visitor.visitClip(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClipContext = ClipContext;
class SegmentContext extends ParserRuleContext_1.ParserRuleContext {
    unit(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnitContext);
        }
        else {
            return this.getRuleContext(i, UnitContext);
        }
    }
    padding(i) {
        if (i === undefined) {
            return this.getRuleContexts(PaddingContext);
        }
        else {
            return this.getRuleContext(i, PaddingContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_segment; }
    // @Override
    enterRule(listener) {
        if (listener.enterSegment) {
            listener.enterSegment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSegment) {
            listener.exitSegment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSegment) {
            return visitor.visitSegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SegmentContext = SegmentContext;
class UnitContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.tryGetToken(lyraParser.LBRACE, 0); }
    content() {
        return this.tryGetRuleContext(0, ContentContext);
    }
    RBRACE() { return this.tryGetToken(lyraParser.RBRACE, 0); }
    LPAREN() { return this.tryGetToken(lyraParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(lyraParser.RPAREN, 0); }
    LBRACK() { return this.tryGetToken(lyraParser.LBRACK, 0); }
    RBRACK() { return this.tryGetToken(lyraParser.RBRACK, 0); }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    NOTE(i) {
        if (i === undefined) {
            return this.getTokens(lyraParser.NOTE);
        }
        else {
            return this.getToken(lyraParser.NOTE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
class AlignmentContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(lyraParser.COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_alignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlignment) {
            listener.enterAlignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlignment) {
            listener.exitAlignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlignment) {
            return visitor.visitAlignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AlignmentContext = AlignmentContext;
class PaddingContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.getToken(lyraParser.COMMA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_padding; }
    // @Override
    enterRule(listener) {
        if (listener.enterPadding) {
            listener.enterPadding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPadding) {
            listener.exitPadding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPadding) {
            return visitor.visitPadding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PaddingContext = PaddingContext;
class ReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(lyraParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_reference; }
    // @Override
    enterRule(listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReference) {
            return visitor.visitReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReferenceContext = ReferenceContext;
class MetadataContext extends ParserRuleContext_1.ParserRuleContext {
    METADATA() { return this.getToken(lyraParser.METADATA, 0); }
    ID() { return this.getToken(lyraParser.ID, 0); }
    EQUALS() { return this.getToken(lyraParser.EQUALS, 0); }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_metadata; }
    // @Override
    enterRule(listener) {
        if (listener.enterMetadata) {
            listener.enterMetadata(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMetadata) {
            listener.exitMetadata(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMetadata) {
            return visitor.visitMetadata(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MetadataContext = MetadataContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    VALUE_NUMBER() { return this.tryGetToken(lyraParser.VALUE_NUMBER, 0); }
    VALUE_SIGNATURE() { return this.tryGetToken(lyraParser.VALUE_SIGNATURE, 0); }
    VALUE_ID() { return this.tryGetToken(lyraParser.VALUE_ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lyraParser.RULE_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
//# sourceMappingURL=lyraParser.js.map