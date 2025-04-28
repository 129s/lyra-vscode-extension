parser grammar lyraParser;

options {
	tokenVocab = lyraLexer;
}

source: content EOF;

content: metadata* (clip | element)*;

clip:
	LBRACE metadata* content RBRACE		# BlockClip
	| LPAREN alignmentExpression RPAREN	# AlignedClip
	| LBRACK content RBRACK				# UniformClip
	| reference							# ReferenceClip;

element: note_seq (COMMA)? # NoteLine;

note_seq: (NOTE | REST)+;
alignmentExpression: content (COLON NOTE)?;
reference: ID;

metadata: METADATA ID EQUALS value;
value: VALUE_NUMBER | VALUE_FRACTION | VALUE_ID;