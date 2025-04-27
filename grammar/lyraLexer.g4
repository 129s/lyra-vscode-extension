lexer grammar lyraLexer;

options {
	caseInsensitive = false;
}

ID: [a-zA-Z_][a-zA-Z0-9_]*;
NOTE: [0-7] ( '#' | 'b')* ( '+' | '-')*;
EQUALS: '=' -> pushMode(VALUE_MODE);
LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
COLON: ':';
COMMA: ',';
METADATA: '@';
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

mode VALUE_MODE;
VALUE_NUMBER: [0-9]+;
VALUE_SIGNATURE: [0-9]+ '/' [0-9]+;
VALUE_ID: [a-zA-Z_][a-zA-Z0-9_]*;
VALUE_WS: [ \t\r\n]+ -> popMode, skip;