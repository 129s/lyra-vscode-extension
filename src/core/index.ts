
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { lyraLexer } from './parser/lyraLexer';
import { lyraParser } from './parser/lyraParser';

export function parseMIDI(input: string) {
    // 1. 词法解析
    const chars = CharStreams.fromString(input);
    const lexer = new lyraLexer(chars);
    const tokens = new CommonTokenStream(lexer);

    // 2. 语法解析
    const parser = new lyraParser(tokens);
    const parseTree = parser.source();

    // 3. 构建AST

    // 4. 语义分析

    // 5. 生成MIDI
}