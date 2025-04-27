import * as vscode from 'vscode';

// 块类型定义
enum BlockType {
    Curly = '{',
    Square = '[',
    Paren = '(',
}

interface Block {
    type: BlockType;
    start: vscode.Position;
    end?: vscode.Position;
    depth: number;
}

export function activate(context: vscode.ExtensionContext) {
    // 创建装饰器类型
    const clipDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255,0,0,0.3)', // 默认透明度
        borderRadius: '2px',
    });
    const arrayDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0,0,255,0.3)',
        borderRadius: '2px',
    });
    const groupDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0,255,0,0.3)',
        borderRadius: '2px',
    });

    // 解析文档中的块结构
    function parseBlocks(document: vscode.TextDocument): Block[] {
        const blocks: Block[] = [];
        const stack: Block[] = [];
        const blockRegex = /([\{\[\(])|([\}\]\)])/g;

        for (let lineIdx = 0; lineIdx < document.lineCount; lineIdx++) {
            const line = document.lineAt(lineIdx);
            const text = line.text;
            let match: RegExpExecArray | null;

            while ((match = blockRegex.exec(text)) !== null) {
                const [fullMatch, open, close] = match;
                const position = new vscode.Position(lineIdx, match.index);

                if (open) {
                    // 推入栈
                    const blockType = open as BlockType;
                    stack.push({
                        type: blockType,
                        start: position,
                        depth: stack.length + 1,
                    });
                } else if (close) {
                    // 弹出栈
                    const lastBlock = stack.pop();
                    if (lastBlock) {
                        lastBlock.end = position;
                        blocks.push(lastBlock);
                    }
                }
            }
        }

        return blocks;
    }

    // 更新装饰器
    function updateDecorations(editor: vscode.TextEditor) {
        const blocks = parseBlocks(editor.document);
        const clipDecorations: vscode.DecorationOptions[] = [];
        const arrayDecorations: vscode.DecorationOptions[] = [];
        const groupDecorations: vscode.DecorationOptions[] = [];

        blocks.forEach(block => {
            if (!block.end) return;

            const range = new vscode.Range(block.start, block.end);
            const alpha = 0.3 - block.depth * 0.03;

            switch (block.type) {
                case BlockType.Curly:
                    clipDecorations.push({ range });
                    break;
                case BlockType.Square:
                    arrayDecorations.push({ range });
                    break;
                case BlockType.Paren:
                    groupDecorations.push({ range });
                    break;
            }
        });

        editor.setDecorations(clipDecorationType, clipDecorations);
        editor.setDecorations(arrayDecorationType, arrayDecorations);
        editor.setDecorations(groupDecorationType, groupDecorations);
    }

    // 监听文档变化
    let activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        updateDecorations(activeEditor);
    }

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(editor => {
            activeEditor = editor;
            if (editor) {
                updateDecorations(editor);
            }
        }),
        vscode.workspace.onDidChangeTextDocument(event => {
            if (activeEditor && event.document === activeEditor.document) {
                updateDecorations(activeEditor);
            }
        })
    );
}

export function deactivate() { }