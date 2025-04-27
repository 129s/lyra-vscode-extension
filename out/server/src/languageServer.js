"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_1 = require("vscode-languageserver");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new vscode_languageserver_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
connection.onInitialize(() => ({
    capabilities: {
        textDocumentSync: 1,
        completionProvider: { triggerCharacters: ['@'] },
        hoverProvider: true
    }
}));
documents.onDidChangeContent(change => {
    validateDocument(change.document);
});
async function validateDocument(document) {
    const text = document.getText();
    const diagnostics = [];
    // 使用ANTLR进行语法分析
    const inputStream = new ANTLRInputStream(text);
    const lexer = new lyraLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new lyraParser(tokenStream);
    // 自定义错误监听器
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
            diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: Range.create(line - 1, charPositionInLine, line - 1, charPositionInLine + 1),
                message: msg,
                source: 'lyra'
            });
        }
    });
    const parseTree = parser.source();
    connection.sendDiagnostics({ uri: document.uri, diagnostics });
}
documents.listen(connection);
connection.listen();
//# sourceMappingURL=languageServer.js.map