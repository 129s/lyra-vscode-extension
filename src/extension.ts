import * as vscode from 'vscode';
import { MidiPlayerManager, PlayMode } from './MidiPlayerManager';
import { LyraCompiler } from './core';
import { Logger } from './core/utils/Logger';

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
    // 初始化日志模块
    Logger.initialize(context);
    Logger.setDebugMode(true); // 开发阶段开启debug模式

    let showBlocks = false;
    let activeEditor: vscode.TextEditor | undefined;
    const playerManager = new MidiPlayerManager();

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

    function getCurrentBlockContent(): string | null {
        const block = getCurrentBlock();
        if (!block || !activeEditor) return null;

        const range = new vscode.Range(block.start, block.end);
        return activeEditor.document.getText(range);
    }

    // 命令实现
    context.subscriptions.push(
        vscode.commands.registerCommand('lyra.playCurrentBlock', async () => {
            await executePlay(PlayMode.Once, false);
        }),

        vscode.commands.registerCommand('lyra.loopCurrentBlock', async () => {
            await executePlay(PlayMode.Loop, false);
        }),

        vscode.commands.registerCommand('lyra.playGlobal', async () => {
            await executePlay(PlayMode.Once, true);
        })
    );

    // 添加执行播放的公共方法
    async function executePlay(mode: PlayMode, isGlobal: boolean) {
        if (!activeEditor) return;

        try {
            const content = isGlobal ?
                activeEditor.document.getText() :
                getCurrentBlockContent();

            if (!content) {
                Logger.error("No valid content to play");
                return;
            }

            const midiBuffer = LyraCompiler.compile(content);

            await playerManager.play(midiBuffer);

            const modeText = mode === PlayMode.Loop ? 'Looping' : 'Playing';
            const scopeText = isGlobal ? 'entire file' : 'current block';
            vscode.window.setStatusBarMessage(`Lyra: ${modeText} ${scopeText}...`);
        } catch (error) {
            Logger.error(`Compilation failed: ${error}`);
        }
    }

    // 监听光标变化
    context.subscriptions.push(
        vscode.window.onDidChangeTextEditorSelection(() => {
            playerManager.stop();
        })
    );

    // 监听编辑器事件
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