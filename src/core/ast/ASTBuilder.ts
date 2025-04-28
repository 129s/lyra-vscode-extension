
import { ParseTree, ParseTreeVisitor } from 'antlr4ts/tree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as lyraParser from '../parser/antlr/lyraParser';
import {
    Root,
    Content,
    Metadata,
    BlockClip,
    AlignedClip,
    UniformClip,
    ReferenceClip,
    NoteLine,
    Note,
    Rest,
    ASTNode
} from './ASTTypes';
import { lyraParserVisitor } from '../parser/antlr/lyraParserVisitor';
import { ParserRuleContext } from 'antlr4ts';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

type Position = {
    line: number;
    column: number;
    startOffset: number;
    endOffset: number;
};

export class ASTBuilder
    extends AbstractParseTreeVisitor<ASTNode>
    implements lyraParserVisitor<ASTNode> {

    buildAST(parseTree: ParseTree): Root {
        return this.visit(parseTree) as Root;
    }

    protected defaultResult(): ASTNode {
        return { type: 'Unknown' } as any;
    }

    private getPosition(ctx: ParserRuleContext): Position | undefined {
        if (!ctx.start || !ctx.stop) return undefined;
        return {
            line: ctx.start.line - 1,
            column: ctx.start.charPositionInLine,
            startOffset: ctx.start.startIndex,
            endOffset: ctx.stop.stopIndex + 1
        };
    }

    private createBaseNode(ctx: ParserRuleContext): { position?: Position } {
        return { position: this.getPosition(ctx) };
    }

    visitSource(ctx: lyraParser.SourceContext): Root {
        const content = this.visit(ctx.content()) as Content;
        return {
            type: 'Root',
            content: content,
            ...this.createBaseNode(ctx)
        };
    }

    visitContent(ctx: lyraParser.ContentContext): Content {
        const metadata: Metadata[] = [];
        const clips: any[] = [];
        const elements: any[] = [];

        ctx.children?.forEach(child => {
            const result = this.visit(child);
            if (result?.type === 'Metadata') {
                metadata.push(result as Metadata);
            } else if (result?.type?.endsWith('Clip')) {
                clips.push(result);
            } else if (result?.type === 'NoteLine') {
                elements.push(result);
            }
        });

        return {
            type: 'Content',
            metadata,
            clips,
            elements,
            ...this.createBaseNode(ctx)
        };
    }

    visitBlockClip(ctx: lyraParser.BlockClipContext): BlockClip {
        const metadata: Metadata[] = [];
        let pre: Content | undefined;
        let post: Content | undefined;

        ctx.metadata()?.forEach(mdCtx => {
            metadata.push(this.visit(mdCtx) as Metadata);
        });

        // 解析冒号分隔的pre/post
        if (ctx.COLON()) {
            const [preCtx, postCtx] = ctx.content();
            pre = preCtx ? this.visit(preCtx) as Content : undefined;
            post = postCtx ? this.visit(postCtx) as Content : undefined;
        } else {
            const singleContent = ctx.content(0);
            if (singleContent) {
                post = this.visit(singleContent) as Content;
            }
        }

        return {
            type: 'BlockClip',
            metadata,
            pre,
            post,
            ...this.createBaseNode(ctx)
        };
    }

    visitAlignedClip(ctx: lyraParser.AlignedClipContext): AlignedClip {
        const [preCtx, postCtx] = ctx.content();
        return {
            type: 'AlignedClip',
            pre: preCtx ? this.visit(preCtx) as Content : undefined,
            post: postCtx ? this.visit(postCtx) as Content : undefined,
            ...this.createBaseNode(ctx)
        };
    }


    visitUniformClip(ctx: lyraParser.UniformClipContext): UniformClip {
        return {
            type: 'UniformClip',
            content: this.visit(ctx.content()) as Content,
            ...this.createBaseNode(ctx)
        };
    }

    visitReferenceClip(ctx: lyraParser.ReferenceClipContext): ReferenceClip {
        const identifier = ctx.reference()?.text || '';
        return {
            type: 'ReferenceClip',
            identifier,
            ...this.createBaseNode(ctx)
        };
    }

    visitNoteLine(ctx: lyraParser.NoteLineContext): NoteLine {
        const tokens = [...ctx.note_seq()?.NOTE() || [], ...ctx.note_seq()?.REST() || []]
            .sort((a, b) => a.symbol.startIndex - b.symbol.startIndex);

        const items: (Note | Rest)[] = tokens.map(token => {
            const text = token.text;
            if (text.startsWith('0')) {
                return {
                    type: 'Rest',
                    modifiers: text.slice(1),
                    raw: text,
                    ...this.createBaseNode(ctx)
                };
            } else {
                return {
                    type: 'Note',
                    degree: parseInt(text[0]),
                    accidental: text[1] === '#' || text[1] === 'b' ? text[1] : undefined,
                    modifiers: text.slice(text[1] === '#' || text[1] === 'b' ? 2 : 1),
                    raw: text,
                    ...this.createBaseNode(ctx)
                };
            }
        });

        return {
            type: 'NoteLine',
            items,
            trailingComma: ctx.COMMA() !== undefined,
            ...this.createBaseNode(ctx)
        };
    }

    visitMetadata(ctx: lyraParser.MetadataContext): Metadata {
        const key = ctx.ID().text;
        const valueCtx = ctx.value();
        let value: any;

        if (valueCtx.VALUE_NUMBER()) {
            value = { type: 'number', value: Number(valueCtx.text) };
        } else if (valueCtx.VALUE_FRACTION()) {
            const [n, d] = valueCtx.text.split('/').map(Number);
            value = { type: 'fraction', numerator: n, denominator: d };
        } else if (valueCtx.VALUE_ID()) {
            value = { type: 'string', value: valueCtx.text };
        }

        return {
            type: 'Metadata',
            key,
            value,
            ...this.createBaseNode(ctx)
        };
    }

    visitChildren(node: RuleNode): ASTNode {
        return super.visitChildren(node) as ASTNode;
    }
}