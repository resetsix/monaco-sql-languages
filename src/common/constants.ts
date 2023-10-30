export const tokenClassConsts = {
	COMMENT: 'comment',
	COMMENT_QUOTE: 'comment.quote',
	DELIMITER: 'delimiter',
	DELIMITER_CURLY: 'delimiter.curly',
	DELIMITER_PAREN: 'delimiter.paren',
	DELIMITER_SQUARE: 'delimiter.square',
	IDENTIFIER: 'identifier',
	IDENTIFIER_QUOTE: 'identifier.quote',
	KEYWORD: 'keyword',
	KEYWORD_SCOPE: 'keyword.scope',
	NUMBER: 'number',
	NUMBER_FLOAT: 'number.float',
	NUMBER_BINARY: 'number.binary',
	NUMBER_OCTAL: 'number.octal',
	NUMBER_HEX: 'number.hex',
	OPERATOR: 'operators',
	OPERATOR_KEYWORD: 'operators.keyword',
	OPERATOR_SYMBOL: 'operators.symbol',
	PREDEFINED: 'predefined',
	STRING: 'string',
	STRING_ESCAPE: 'string.escape',
	TYPE: 'type',
	VARIABLE: 'variable',
	WHITE: 'white'
};

export const postfixTokenClass = (token: string) => token + '.sql';
