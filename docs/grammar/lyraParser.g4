parser grammar lyraParser;

options {
	tokenVocab = lyraLexer;
}

source: content EOF;

content: metadata* (clip | element)*;

clip:
	LBRACE metadata* (pre = content COLON post = content)? RBRACE	# BlockClip
	| LPAREN (pre = content COLON post = content)? RPAREN			# AlignedClip
	| LBRACK content RBRACK											# UniformClip
	| reference														# ReferenceClip;

element: note_seq (COMMA)? # NoteLine;

note_seq: (NOTE | REST)+;

reference: ID;

metadata: METADATA ID EQUALS value;
value: VALUE_NUMBER | VALUE_FRACTION | VALUE_ID;