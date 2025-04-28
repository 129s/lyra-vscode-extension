import { LyraParserWrapper } from './parser/LyraParserWrapper';
import { ASTBuilder } from './ast/ASTBuilder';
import { MidiGenerator } from './midi/MidiGenerator';

export class LyraCompiler {
    static compile(lyraCode: string): Buffer {
        const parseTree = LyraParserWrapper.parse(lyraCode);
        const ast = new ASTBuilder().buildAST(parseTree);
        return new MidiGenerator().generate(ast);
    }
}