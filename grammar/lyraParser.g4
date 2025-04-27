parser grammar lyraParser;

options {
	tokenVocab = lyraLexer;
}

source: content EOF;

content: metadata* clip?;
clip: segment (alignment segment)?;
segment: (unit | padding)+;
unit:
	'{' content '}'
	| '(' content ')'
	| '[' content ']'
	| reference
	| NOTE+;

alignment: ':';
padding: ',';
reference: ID;

metadata: METADATA ID EQUALS value;

value: VALUE_NUMBER | VALUE_SIGNATURE | VALUE_ID;