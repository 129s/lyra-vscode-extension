
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { lyraLexer } from './antlr/lyraLexer';
import { lyraParser } from './antlr/lyraParser';
import { SourceContext } from './antlr/lyraParser';

export class LyraParserWrapper {
    static parse(input: string): SourceContext {
        const chars = CharStreams.fromString(input);
        const lexer = new lyraLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new lyraParser(tokens);
        return parser.source();
    }
}