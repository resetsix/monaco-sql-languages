import type { languages } from '../../fillers/monaco-editor-core';
import { TokenClassConsts } from '../../common/constants';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.sql',
	ignoreCase: true,
	brackets: [
		{ open: '[', close: ']', token: TokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: TokenClassConsts.DELIMITER_PAREN },
		{ open: '{', close: '}', token: TokenClassConsts.DELIMITER_CURLY }
	],
	keywords: [
		'ALTER',
		'AND',
		'AS',
		'BETWEEN',
		'BY',
		'CASE',
		'CAST',
		'CONSTRAINT',
		'CREATE',
		'CROSS',
		'CUBE',
		'CURRENT_CATALOG',
		'CURRENT_DATE',
		'CURRENT_PATH',
		'CURRENT_ROLE',
		'CURRENT_SCHEMA',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'CURRENT_USER',
		'DEALLOCATE',
		'DELETE',
		'DESCRIBE',
		'DISTINCT',
		'DROP',
		'ELSE',
		'END',
		'ESCAPE',
		'EXCEPT',
		'EXECUTE',
		'EXISTS',
		'EXTRACT',
		'FALSE',
		'FOR',
		'FROM',
		'FULL',
		'GROUP',
		'GROUPING',
		'HAVING',
		'IN',
		'INNER',
		'INSERT',
		'INTERSECT',
		'INTO',
		'IS',
		'JOIN',
		'LEFT',
		'LIKE',
		'LOCALTIME',
		'LOCALTIMESTAMP',
		'NATURAL',
		'NORMALIZE',
		'NOT',
		'NULL',
		'ON',
		'OR',
		'ORDER',
		'OUTER',
		'PREPARE',
		'RECURSIVE',
		'RIGHT',
		'ROLLUP',
		'SELECT',
		'TABLE',
		'THEN',
		'TRUE',
		'UESCAPE',
		'UNION',
		'UNNEST',
		'USING',
		'VALUES',
		'WHEN',
		'WHERE',
		'WITH',
		// part of non-reserved keywords which is common
		'ADD',
		'ALL',
		'ANALYZE',
		'ASC',
		'CASCADE',
		'COLUMN',
		'COMMENT',
		'DEFAULT',
		'DENY',
		'DESC',
		'EXPLAIN',
		'FETCH',
		'FORMAT',
		'GRANT',
		'GRANTED',
		'IF',
		'INTERVAL',
		'LIMIT',
		'MERGE',
		'OFFSET',
		'ONLY',
		'PARTITION',
		'RANGE',
		'READ',
		'REFRESH',
		'RENAME',
		'REVOKE',
		'REPLACE',
		'RESET',
		'ROLE',
		'ROW',
		'SCHEMA',
		'SET',
		'SHOW',
		'STATS',
		'TO',
		'UPDATE',
		'USE',
		'VIEW'
	],
	operators: [
		// set
		'INTERSECT',
		'UNION',
		'EXCEPT',
		// logical
		'AND',
		'OR',
		'NOT',
		// join
		'JOIN',
		'CROSS',
		'INNER',
		'OUTER',
		'FULL',
		'LEFT',
		'RIGHT',
		// Predicates
		'LIKE',
		'IN',
		'BETWEEN',
		'DISTINCT',
		'ESCAPE',
		'IS',
		'ALL',
		'ANY',
		'SOME'
	],
	builtinFunctions: [
		// https://trino.io/docs/current/functions/list.html
		'ABS',
		'ACOS',
		'ALL_MATCH',
		'ANY_MATCH',
		'ANY_VALUE',
		'APPROX_DISTINCT',
		'APPROX_MOST_FREQUENT',
		'APPROX_PERCENTILE',
		'APPROX_SET',
		'ARBITRARY',
		'ARRAY_AGG',
		'ARRAY_DISTINCT',
		'ARRAY_EXCEPT',
		'ARRAY_INTERSECT',
		'ARRAY_JOIN',
		'ARRAY_MAX',
		'ARRAY_MIN',
		'ARRAY_POSITION',
		'ARRAY_REMOVE',
		'ARRAY_SORT',
		'ARRAY_UNION',
		'ARRAYS_OVERLAP',
		'ASIN',
		'AT_TIMEZONE',
		'ATAN',
		'ATAN2',
		'AVG',
		'BAR',
		'BETA_CDF',
		'BING_TILE',
		'BING_TILE_AT',
		'BING_TILE_COORDINATES',
		'BING_TILE_POLYGON',
		'BING_TILE_QUADKEY',
		'BING_TILE_ZOOM_LEVEL',
		'BING_TILES_AROUND',
		'BIT_COUNT',
		'BITWISE_AND',
		'BITWISE_AND_AGG',
		'BITWISE_LEFT_SHIFT',
		'BITWISE_NOT',
		'BITWISE_OR',
		'BITWISE_OR_AGG',
		'BITWISE_RIGHT_SHIFT',
		'BITWISE_RIGHT_SHIFT_ARITHMETIC',
		'BITWISE_XOR',
		'BOOL_AND',
		'BOOL_OR',
		'CARDINALITY',
		'CAST',
		'CBRT',
		'CEIL',
		'CEILING',
		'CHAR2HEXINT',
		'CHECKSUM',
		'CHR',
		'CLASSIFY',
		'CODEPOINT',
		'COLOR',
		'COMBINATIONS',
		'CONCAT',
		'CONCAT_WS',
		'CONTAINS',
		'CONTAINS_SEQUENCE',
		'CONVEX_HULL_AGG',
		'CORR',
		'COS',
		'COSH',
		'COSINE_SIMILARITY',
		'COUNT',
		'COUNT_IF',
		'COVAR_POP',
		'COVAR_SAMP',
		'CRC32',
		'CUME_DIST',
		'CURRENT_GROUPS',
		'CURRENT_TIMEZONE',
		'DATE',
		'DATE_ADD',
		'DATE_DIFF',
		'DATE_FORMAT',
		'DATE_PARSE',
		'DATE_TRUNC',
		'DAY',
		'DAY_OF_MONTH',
		'DAY_OF_WEEK',
		'DAY_OF_YEAR',
		'DEGREES',
		'DENSE_RANK',
		'DOW',
		'DOY',
		'E',
		'ELEMENT_AT',
		'EMPTY_APPROX_SET',
		'EVERY',
		'EXCLUDE_COLUMNS',
		'EXTRACT',
		'EXP',
		'FEATURES',
		'FILTER',
		'FIRST_VALUE',
		'FLATTEN',
		'FLOOR',
		'FORMAT',
		'FORMAT_DATETIME',
		'FORMAT_NUMBER',
		'FROM_BASE',
		'FROM_BASE32',
		'FROM_BASE64',
		'FROM_BASE64URL',
		'FROM_BIG_ENDIAN_32',
		'FROM_BIG_ENDIAN_64',
		'FROM_ENCODED_POLYLINE',
		'FROM_HEX',
		'FROM_IEEE754_32',
		'FROM_IEEE754_64',
		'FROM_ISO8601_DATE',
		'FROM_ISO8601_TIMESTAMP',
		'FROM_ISO8601_TIMESTAMP_NANOS',
		'FROM_UNIXTIME',
		'FROM_UNIXTIME_NANOS',
		'FROM_UTF8',
		'GEOMETRIC_MEAN',
		'GEOMETRY_FROM_HADOOP_SHAPE',
		'GEOMETRY_INVALID_REASON',
		'GEOMETRY_NEAREST_POINTS',
		'GEOMETRY_TO_BING_TILES',
		'GEOMETRY_UNION',
		'GEOMETRY_UNION_AGG',
		'GREAT_CIRCLE_DISTANCE',
		'GREATEST',
		'HAMMING_DISTANCE',
		'HASH_COUNTS',
		'HISTOGRAM',
		'HMAC_MD5',
		'HMAC_SHA1',
		'HMAC_SHA256',
		'HMAC_SHA512',
		'HOUR',
		'HUMAN_READABLE_SECONDS',
		'INDEX',
		'INFINITY',
		'INTERSECTION_CARDINALITY',
		'INVERSE_BETA_CDF',
		'INVERSE_NORMAL_CDF',
		'IS_FINITE',
		'IS_INFINITE',
		'IS_JSON_SCALAR',
		'IS_NAN',
		'JACCARD_INDEX',
		'JSON_ARRAY_CONTAINS',
		'JSON_ARRAY_GET',
		'JSON_ARRAY_LENGTH',
		'JSON_EXTRACT',
		'JSON_EXTRACT_SCALAR',
		'JSON_FORMAT',
		'JSON_PARSE',
		'JSON_SIZE',
		'KURTOSIS',
		'LAG',
		'LAST_DAY_OF_MONTH',
		'LAST_VALUE',
		'LEAD',
		'LEARN_CLASSIFIER',
		'LEARN_LIBSVM_CLASSIFIER',
		'LEARN_LIBSVM_REGRESSOR',
		'LEARN_REGRESSOR',
		'LEAST',
		'LENGTH',
		'LEVENSHTEIN_DISTANCE',
		'LINE_INTERPOLATE_POINT',
		'LINE_INTERPOLATE_POINTS',
		'LINE_LOCATE_POINT',
		'LISTAGG',
		'LN',
		'LOG',
		'LOG10',
		'LOG2',
		'LOWER',
		'LPAD',
		'LTRIM',
		'LUHN_CHECK',
		'MAKE_SET_DIGEST',
		'MAP',
		'MAP_AGG',
		'MAP_CONCAT',
		'MAP_ENTRIES',
		'MAP_FILTER',
		'MAP_FROM_ENTRIES',
		'MAP_KEYS',
		'MAP_UNION',
		'MAP_VALUES',
		'MAP_ZIP_WITH',
		'MAX',
		'MAX_BY',
		'MD5',
		'MERGE',
		'MERGE_SET_DIGEST',
		'MILLISECOND',
		'MIN',
		'MIN_BY',
		'MINUTE',
		'MOD',
		'MONTH',
		'MULTIMAP_AGG',
		'MULTIMAP_FROM_ENTRIES',
		'MURMUR3',
		'NAN',
		'NGRAMS',
		'NONE_MATCH',
		'NORMAL_CDF',
		'NORMALIZE',
		'NOW',
		'NTH_VALUE',
		'NTILE',
		'NUMERIC_HISTOGRAM',
		'OBJECTID_TIMESTAMP',
		'PARSE_DATETIME',
		'PARSE_DURATION',
		'PARSE_DATA_SIZE',
		'PERCENT_RANK',
		'PI',
		'POSITION',
		'POW',
		'POWER',
		'QDIGEST_AGG',
		'QUARTER',
		'RADIANS',
		'RAND',
		'RANDOM',
		'RANK',
		'REDUCE',
		'REDUCE_AGG',
		'REGEXP_COUNT',
		'REGEXP_EXTRACT',
		'REGEXP_EXTRACT_ALL',
		'REGEXP_LIKE',
		'REGEXP_POSITION',
		'REGEXP_REPLACE',
		'REGEXP_SPLIT',
		'REGRESS',
		'REGR_INTERCEPT',
		'REGR_SLOPE',
		'RENDER',
		'REPEAT',
		'REPLACE',
		'REVERSE',
		'RGB',
		'ROUND',
		'ROW_NUMBER',
		'RPAD',
		'RTRIM',
		'SECOND',
		'SEQUENCE',
		'SHA1',
		'SHA256',
		'SHA512',
		'SHUFFLE',
		'SIGN',
		'SIMPLIFY_GEOMETRY',
		'SIN',
		'SINH',
		'SKEWNESS',
		'SLICE',
		'SOUNDEX',
		'SPLIT',
		'SPLIT_PART',
		'SPLIT_TO_MAP',
		'SPLIT_TO_MULTIMAP',
		'SPOOKY_HASH_V2_32',
		'SPOOKY_HASH_V2_64',
		'SQRT',
		'ST_AREA',
		'ST_ASBINARY',
		'ST_ASTEXT',
		'ST_BOUNDARY',
		'ST_BUFFER',
		'ST_CENTROID',
		'ST_CONTAINS',
		'ST_CONVEXHULL',
		'ST_COORDDIM',
		'ST_CROSSES',
		'ST_DIFFERENCE',
		'ST_DIMENSION',
		'ST_DISJOINT',
		'ST_DISTANCE',
		'ST_ENDPOINT',
		'ST_ENVELOPE',
		'ST_ENVELOPEASPTS',
		'ST_EQUALS',
		'ST_EXTERIORRING',
		'ST_GEOMETRIES',
		'ST_GEOMETRYFROMTEXT',
		'ST_GEOMETRYN',
		'ST_GEOMETRYTYPE',
		'ST_GEOMFROMBINARY',
		'ST_INTERIORRINGN',
		'ST_INTERIORRINGS',
		'ST_INTERSECTION',
		'ST_INTERSECTS',
		'ST_ISCLOSED',
		'ST_ISEMPTY',
		'ST_ISRING',
		'ST_ISSIMPLE',
		'ST_ISVALID',
		'ST_LENGTH',
		'ST_LINEFROMTEXT',
		'ST_LINESTRING',
		'ST_MULTIPOINT',
		'ST_NUMGEOMETRIES',
		'ST_NUMPOINTS',
		'ST_OVERLAPS',
		'ST_POINT',
		'ST_POINTN',
		'ST_POINTS',
		'ST_POLYGON',
		'ST_RELATE',
		'ST_STARTPOINT',
		'ST_SYMDIFFERENCE',
		'ST_TOUCHES',
		'ST_UNION',
		'ST_WITHIN',
		'ST_X',
		'ST_XMAX',
		'ST_XMIN',
		'ST_Y',
		'ST_YMAX',
		'ST_YMIN',
		'STARTS_WITH',
		'STDDEV',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'STRPOS',
		'SUBSTR',
		'SUBSTRING',
		'SUM',
		'TAN',
		'TANH',
		'TDIGEST_AGG',
		'TIMESTAMP_OBJECTID',
		'TIMEZONE_HOUR',
		'TIMEZONE_MINUTE',
		'TO_BASE',
		'TO_BASE32',
		'TO_BASE64',
		'TO_BASE64URL',
		'TO_BIG_ENDIAN_32',
		'TO_BIG_ENDIAN_64',
		'TO_CHAR',
		'TO_DATE',
		'TO_ENCODED_POLYLINE',
		'TO_GEOMETRY',
		'TO_HEX',
		'TO_IEEE754_32',
		'TO_IEEE754_64',
		'TO_ISO8601',
		'TO_MILLISECONDS',
		'TO_SPHERICAL_GEOGRAPHY',
		'TO_TIMESTAMP',
		'TO_UNIXTIME',
		'TO_UTF8',
		'TRANSFORM',
		'TRANSFORM_KEYS',
		'TRANSFORM_VALUES',
		'TRANSLATE',
		'TRIM',
		'TRIM_ARRAY',
		'TRUNCATE',
		'TRY_CAST',
		'TYPEOF',
		'UPPER',
		'URL_DECODE',
		'URL_ENCODE',
		'URL_EXTRACT_FRAGMENT',
		'URL_EXTRACT_HOST',
		'URL_EXTRACT_PARAMETER',
		'URL_EXTRACT_PATH',
		'URL_EXTRACT_PROTOCOL',
		'URL_EXTRACT_PORT',
		'URL_EXTRACT_QUERY',
		'UUID',
		'VALUE_AT_QUANTILE',
		'VALUES_AT_QUANTILES',
		'VAR_POP',
		'VAR_SAMP',
		'VARIANCE',
		'VERSION',
		'WEEK',
		'WEEK_OF_YEAR',
		'WIDTH_BUCKET',
		'WILSON_INTERVAL_LOWER',
		'WILSON_INTERVAL_UPPER',
		'WITH_TIMEZONE',
		'WORD_STEM',
		'XXHASH64',
		'YEAR',
		'YEAR_OF_WEEK',
		'YOW',
		'ZIP',
		'ZIP_WITH'
	],
	builtinVariables: [
		// Not support
	],
	typeKeywords: [
		// https://trino.io/docs/current/language/types.html
		// Boolean
		'BOOLEAN',
		// Integer
		'TINYINT',
		'SMALLINT',
		'INTEGER',
		'INT',
		'BIGINT',
		// Floating-point
		'REAL',
		'DOUBLE',
		// Fixed-precision
		'DECIMAL',
		// String
		'VARCHAR',
		'CHAR',
		'VARBINARY',
		'JSON',
		// Date and time
		'DATE',
		'TIME',
		'TIMESTAMP',
		'INTERVAL',
		// Structural
		'ARRAY',
		'MAP',
		'ROW',
		// Network address
		'IPADDRESS',
		// UUID
		'UUID'
	],
	scopeKeywords: ['CASE', 'END', 'WHEN', 'THEN', 'ELSE'],
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@numbers' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			{ include: '@scopes' },
			{ include: '@complexDataTypes' },
			[/[;,.]/, TokenClassConsts.DELIMITER],
			[/[\(\)\[\]\{\}]/, '@brackets'],
			[
				/[\w@$-]+/, // https://trino.io/docs/current/language/reserved.html#language-identifiers
				{
					cases: {
						'@scopeKeywords': TokenClassConsts.KEYWORD_SCOPE,
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@typeKeywords': TokenClassConsts.TYPE,
						'@builtinVariables': TokenClassConsts.VARIABLE,
						'@builtinFunctions': TokenClassConsts.PREDEFINED,
						'@keywords': TokenClassConsts.KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL]
		],
		whitespace: [[/[\s\t\r\n]+/, TokenClassConsts.WHITE]],
		comments: [
			[/--+.*/, TokenClassConsts.COMMENT],
			[/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		comment: [
			[/[^*/]+/, TokenClassConsts.COMMENT],
			[/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/./, TokenClassConsts.COMMENT]
		],
		pseudoColumns: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@pseudoColumns': TokenClassConsts.PREDEFINED,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			]
		],
		numbers: [
			[/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER]
		],
		strings: [[/'/, { token: TokenClassConsts.STRING, next: '@string' }]],
		string: [
			[/[^']+/, TokenClassConsts.STRING_ESCAPE],
			[/''/, TokenClassConsts.STRING],
			[/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		complexIdentifiers: [
			// https://trino.io/docs/current/language/reserved.html#language-identifiers
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }],
			[/"/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@doubleQuotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/``/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		doubleQuotedIdentifier: [
			[/[^"]+/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/""/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/"/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		scopes: [
			// Not Support
		],
		complexDataTypes: [
			[/WITHOUT\s+TIME\s+ZONE\b/i, { token: TokenClassConsts.TYPE }],
			[/WITH\s+TIME\s+ZONE\b/i, { token: TokenClassConsts.TYPE }]
		]
	}
};