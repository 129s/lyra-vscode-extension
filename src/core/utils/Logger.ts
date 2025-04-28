import * as vscode from 'vscode';

export class Logger {
    private static _channel: vscode.OutputChannel | null = null;
    private static _debugMode = false;

    static initialize(context: vscode.ExtensionContext) {
        this._channel = vscode.window.createOutputChannel('Lyra Debug');
        context.subscriptions.push(this._channel);
    }

    static setDebugMode(enabled: boolean) {
        this._debugMode = enabled;
    }

    static info(message: string) {
        this._channel?.appendLine(`[INFO] ${message}`);
    }

    static error(message: string | Error) {
        const msg = message instanceof Error ? message.message : message;
        this._channel?.appendLine(`[ERROR] ${msg}`);
        vscode.window.showErrorMessage(msg);
    }

    static debug(message: string, data?: any) {
        if (!this._debugMode) return;
        const line = `[DEBUG] ${message}` + (data ? `\n${JSON.stringify(data, null, 2)}` : '');
        this._channel?.appendLine(line);
    }

    static show() {
        this._channel?.show(true);
    }
}