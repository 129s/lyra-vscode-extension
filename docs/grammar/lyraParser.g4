parser grammar lyraParser;

options {
	tokenVocab = lyraLexer;
}

source: content EOF;

content: metadata* (clip | element)*;

clip:
	LBRACE metadata* content RBRACE	# BlockClip
	| LPAREN content RPAREN			# AlignedClip
	| LBRACK content RBRACK			# UniformClip
	| reference						# ReferenceClip;

element:
	note_seq (COMMA)?	# NoteLine
	| alignment			# ClipAlignment;

note_seq: (NOTE | REST)+;
alignment: COLON (VALUE_NUMBER | VALUE_FRACTION)?;
reference: ID;

metadata: METADATA ID EQUALS value;
value: VALUE_NUMBER | VALUE_FRACTION | VALUE_ID;