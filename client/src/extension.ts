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
        backgroundColor: 'rgba(255,200,200,0.08)',
        border: '1px solid rgba(255,100,100,0.15)',
        borderRadius: '2px',
    });

    const arrayDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(200,200,255,0.08)',
        border: '1px solid rgba(100,100,255,0.15)',
        borderRadius: '2px',
    });

    const groupDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(200,255,200,0.08)',
        border: '1px solid rgba(100,255,100,0.15)',
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
                    stack.push({
                        type: open as BlockType,
                        start: position,
                        depth: stack.length + 1,
                    });
                } else if (close) {
                    const lastBlock = stack.pop();
                    if (lastBlock) {
                        // 扩展结束位置到行尾
                        const endLine = document.lineAt(lineIdx);
                        lastBlock.end = endLine.range.end;
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

            // 更新装饰器范围生成逻辑
            const start = block.start.with(undefined, 0); // 行首
            const end = block.end ?
                block.end.with(block.end.line, editor.document.lineAt(block.end.line).text.length) :
                start;
            const range = new vscode.Range(start, end);

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