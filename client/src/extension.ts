import * as vscode from 'vscode';

enum BlockType {
    Curly = '{',
    Square = '[',
    Paren = '(',
}

interface Block {
    type: BlockType;
    start: vscode.Position;
    end: vscode.Position;
    depth: number;
}

export function activate(context: vscode.ExtensionContext) {
    let showBlocks = false;
    let activeEditor: vscode.TextEditor | undefined;

    // 块装饰器（无边框纯色背景）
    const blockDecoration = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(100, 150, 250, 0.07)',
        isWholeLine: true
    });

    // 解析块结构
    function parseBlocks(doc: vscode.TextDocument): Block[] {
        const blocks: Block[] = [];
        const stack: Block[] = [];
        const blockRegex = /([\{\[\(])|([\}\]\)])/g;

        for (let lineIdx = 0; lineIdx < doc.lineCount; lineIdx++) {
            const line = doc.lineAt(lineIdx);
            let match;
            while ((match = blockRegex.exec(line.text)) !== null) {
                const pos = new vscode.Position(lineIdx, match.index);
                if (match[1]) { // 开符号
                    stack.push({
                        type: match[1] as BlockType,
                        start: pos,
                        end: pos,
                        depth: stack.length + 1
                    });
                } else if (match[2]) { // 闭符号
                    const block = stack.pop();
                    if (block) {
                        block.end = line.range.end;
                        blocks.push(block);
                    }
                }
            }
        }
        return blocks;
    }

    // 更新装饰器
    function updateDecorations() {
        if (!activeEditor) return;

        const blocks = parseBlocks(activeEditor.document);
        const ranges = blocks.map(b => ({
            range: new vscode.Range(
                b.start.with(undefined, 0),
                b.end.with(undefined, 1000)
            )
        }));

        activeEditor.setDecorations(blockDecoration, showBlocks ? ranges : []);
    }

    // 获取当前光标所在块
    function getCurrentBlock(): Block | undefined {
        if (!activeEditor) return;

        const pos = activeEditor.selection.active;
        return parseBlocks(activeEditor.document)
            .find(b => b.start.isBeforeOrEqual(pos) && b.end.isAfterOrEqual(pos));
    }

    // 命令实现
    context.subscriptions.push(
        vscode.commands.registerCommand('lyra.toggleBlocks', () => {
            showBlocks = !showBlocks;
            updateDecorations();
            // vscode.window.showInformationMessage(`块显示 ${showBlocks ? '开启' : '关闭'}`);
        }),

        vscode.commands.registerCommand('lyra.playCurrentBlock', () => {
            const block = getCurrentBlock();
            if (block) {
                const range = new vscode.Range(block.start, block.end);
                const content = activeEditor!.document.getText(range);
                vscode.window.showInformationMessage(
                    `play:${content}\n` +
                    `line:${block.start.line + 1}-${block.end.line + 1}`
                );
                // 在此处添加播放逻辑
            }
        }),

        vscode.commands.registerCommand('lyra.playGlobal', () => {
            if (!activeEditor) return;

            const blocks = parseBlocks(activeEditor.document);
            const mainBlock = blocks.find(b => b.depth === 1);
            if (mainBlock) {
                const content = activeEditor.document.getText(
                    new vscode.Range(mainBlock.start, mainBlock.end)
                );
                vscode.window.showInformationMessage(
                    `play:${content}\n` +
                    `line:${mainBlock.start.line + 1}-${mainBlock.end.line + 1}`
                );
            } else {
                const fullContent = activeEditor.document.getText();
                vscode.window.showInformationMessage("播放整个文件");
            }
            // 在此处添加播放逻辑
        })
    );

    // 编辑器事件监听
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(editor => {
            activeEditor = editor;
            updateDecorations();
        }),
        vscode.workspace.onDidChangeTextDocument(() => updateDecorations())
    );

    // 初始化
    activeEditor = vscode.window.activeTextEditor;
    updateDecorations();
}

export function deactivate() { }