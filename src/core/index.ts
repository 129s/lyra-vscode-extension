import { LyraParserWrapper } from './parser/LyraParserWrapper';
import { ASTBuilder } from './ast/ASTBuilder';
import { MidiGenerator } from './midi/MidiGenerator';
import { Logger } from './utils/Logger';

export class LyraCompiler {
    static compile(lyraCode: string): Buffer {
        try {
            Logger.debug('compile:', lyraCode);
            const parseTree = LyraParserWrapper.parse(lyraCode);
            Logger.debug('parseTree:', parseTree.toInfoString);
            const ast = new ASTBuilder().buildAST(parseTree);
            Logger.debug('Generated AST:', ast);
            return new MidiGenerator().generate(ast);
        } catch (error) {
            throw new Error(`${error instanceof Error ? error.message : String(error)}`);
        }
    }
}