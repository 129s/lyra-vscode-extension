// Generated from ./lyraLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class lyraLexer extends Lexer {
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
	public static readonly VALUE_MODE = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "VALUE_MODE",
	];

	public static readonly ruleNames: string[] = [
		"ID", "REST", "NOTE", "EQUALS", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "COLON", "COMMA", "METADATA", "COMMENT", "WS", "VALUE_NUMBER", 
		"VALUE_FRACTION", "VALUE_ID", "VALUE_WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lyraLexer._LITERAL_NAMES, lyraLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lyraLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(lyraLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "lyraLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return lyraLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return lyraLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return lyraLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return lyraLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x15\x89\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E\x037\v" +
		"\x03\x03\x04\x03\x04\x05\x04;\n\x04\x03\x04\x07\x04>\n\x04\f\x04\x0E\x04" +
		"A\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F]\n\x0F\f\x0F" +
		"\x0E\x0F`\v\x0F\x03\x0F\x03\x0F\x03\x10\x06\x10e\n\x10\r\x10\x0E\x10f" +
		"\x03\x10\x03\x10\x03\x11\x06\x11l\n\x11\r\x11\x0E\x11m\x03\x12\x06\x12" +
		"q\n\x12\r\x12\x0E\x12r\x03\x12\x03\x12\x06\x12w\n\x12\r\x12\x0E\x12x\x03" +
		"\x13\x03\x13\x07\x13}\n\x13\f\x13\x0E\x13\x80\v\x13\x03\x14\x06\x14\x83" +
		"\n\x14\r\x14\x0E\x14\x84\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x04\x02" +
		"\x03\x06\x02\x04\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02\b\x10\x02\t\x12" +
		"\x02\n\x14\x02\v\x16\x02\f\x18\x02\r\x1A\x02\x0E\x1C\x02\x0F\x1E\x02\x10" +
		" \x02\x11\"\x02\x12$\x02\x13&\x02\x14(\x02\x15\x04\x02\x03\n\x05\x02C" +
		"\\aac|\x06\x022;C\\aac|\x04\x02--//\x03\x0239\x04\x02%%dd\x04\x02\f\f" +
		"\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x03\x022;\x02\x92\x02\x04\x03\x02\x02" +
		"\x02\x02\x06\x03\x02\x02\x02\x02\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02" +
		"\x02\f\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02" +
		"\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02\x02\x16\x03\x02\x02\x02" +
		"\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02" +
		"\x02\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02\x03\"\x03\x02\x02\x02\x03" +
		"$\x03\x02\x02\x02\x03&\x03\x02\x02\x02\x03(\x03\x02\x02\x02\x04*\x03\x02" +
		"\x02\x02\x061\x03\x02\x02\x02\b8\x03\x02\x02\x02\nB\x03\x02\x02\x02\f" +
		"F\x03\x02\x02\x02\x0EH\x03\x02\x02\x02\x10J\x03\x02\x02\x02\x12L\x03\x02" +
		"\x02\x02\x14N\x03\x02\x02\x02\x16P\x03\x02\x02\x02\x18R\x03\x02\x02\x02" +
		"\x1AT\x03\x02\x02\x02\x1CV\x03\x02\x02\x02\x1EX\x03\x02\x02\x02 d\x03" +
		"\x02\x02\x02\"k\x03\x02\x02\x02$p\x03\x02\x02\x02&z\x03\x02\x02\x02(\x82" +
		"\x03\x02\x02\x02*.\t\x02\x02\x02+-\t\x03\x02\x02,+\x03\x02\x02\x02-0\x03" +
		"\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\x05\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x0215\x072\x02\x0224\t\x04\x02\x0232\x03\x02\x02\x0247" +
		"\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x026\x07\x03\x02\x02" +
		"\x0275\x03\x02\x02\x028:\t\x05\x02\x029;\t\x06\x02\x02:9\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;?\x03\x02\x02\x02<>\t\x04\x02\x02=<\x03\x02\x02\x02" +
		">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\t\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02BC\x07?\x02\x02CD\x03\x02\x02\x02DE\b\x05\x02\x02" +
		"E\v\x03\x02\x02\x02FG\x07}\x02\x02G\r\x03\x02\x02\x02HI\x07\x7F\x02\x02" +
		"I\x0F\x03\x02\x02\x02JK\x07*\x02\x02K\x11\x03\x02\x02\x02LM\x07+\x02\x02" +
		"M\x13\x03\x02\x02\x02NO\x07]\x02\x02O\x15\x03\x02\x02\x02PQ\x07_\x02\x02" +
		"Q\x17\x03\x02\x02\x02RS\x07<\x02\x02S\x19\x03\x02\x02\x02TU\x07.\x02\x02" +
		"U\x1B\x03\x02\x02\x02VW\x07B\x02\x02W\x1D\x03\x02\x02\x02XY\x071\x02\x02" +
		"YZ\x071\x02\x02Z^\x03\x02\x02\x02[]\n\x07\x02\x02\\[\x03\x02\x02\x02]" +
		"`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02" +
		"`^\x03\x02\x02\x02ab\b\x0F\x03\x02b\x1F\x03\x02\x02\x02ce\t\b\x02\x02" +
		"dc\x03\x02\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02hi\b\x10\x03\x02i!\x03\x02\x02\x02jl\t\t\x02\x02kj\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n#\x03" +
		"\x02\x02\x02oq\t\t\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02tv\x071\x02\x02uw\t\t\x02" +
		"\x02vu\x03\x02\x02\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02" +
		"\x02y%\x03\x02\x02\x02z~\t\x02\x02\x02{}\t\x03\x02\x02|{\x03\x02\x02\x02" +
		"}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\'\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x83\t\b\x02\x02\x82\x81\x03\x02" +
		"\x02\x02\x83\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\b\x14\x04\x02\x87\x88\b\x14\x03" +
		"\x02\x88)\x03\x02\x02\x02\x0F\x02\x03.5:?^fmrx~\x84\x05\x07\x03\x02\b" +
		"\x02\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lyraLexer.__ATN) {
			lyraLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lyraLexer._serializedATN));
		}

		return lyraLexer.__ATN;
	}

}

