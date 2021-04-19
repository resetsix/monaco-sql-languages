(self.webpackChunkmonaco_languages = self.webpackChunkmonaco_languages || []).push([
	[5849],
	{
		25849: (e, s, o) => {
			'use strict';
			o.r(s), o.d(s, { conf: () => n, language: () => a });
			var n = {
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
						{ open: "'", close: "'" }
					],
					surroundingPairs: [
						{ open: '{', close: '}' },
						{ open: '[', close: ']' },
						{ open: '(', close: ')' },
						{ open: '"', close: '"' },
						{ open: "'", close: "'" }
					]
				},
				a = {
					defaultToken: '',
					tokenPostfix: '.dockerfile',
					variable: /\${?[\w]+}?/,
					tokenizer: {
						root: [
							{ include: '@whitespace' },
							{ include: '@comment' },
							[/(ONBUILD)(\s+)/, ['keyword', '']],
							[
								/(ENV)(\s+)([\w]+)/,
								['keyword', '', { token: 'variable', next: '@arguments' }]
							],
							[
								/(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,
								{ token: 'keyword', next: '@arguments' }
							]
						],
						arguments: [
							{ include: '@whitespace' },
							{ include: '@strings' },
							[
								/(@variable)/,
								{
									cases: {
										'@eos': { token: 'variable', next: '@popall' },
										'@default': 'variable'
									}
								}
							],
							[/\\/, { cases: { '@eos': '', '@default': '' } }],
							[
								/./,
								{
									cases: {
										'@eos': { token: '', next: '@popall' },
										'@default': ''
									}
								}
							]
						],
						whitespace: [
							[
								/\s+/,
								{
									cases: {
										'@eos': { token: '', next: '@popall' },
										'@default': ''
									}
								}
							]
						],
						comment: [[/(^#.*$)/, 'comment', '@popall']],
						strings: [
							[/\\'$/, '', '@popall'],
							[/\\'/, ''],
							[/'$/, 'string', '@popall'],
							[/'/, 'string', '@stringBody'],
							[/"$/, 'string', '@popall'],
							[/"/, 'string', '@dblStringBody']
						],
						stringBody: [
							[
								/[^\\\$']/,
								{
									cases: {
										'@eos': { token: 'string', next: '@popall' },
										'@default': 'string'
									}
								}
							],
							[/\\./, 'string.escape'],
							[/'$/, 'string', '@popall'],
							[/'/, 'string', '@pop'],
							[/(@variable)/, 'variable'],
							[/\\$/, 'string'],
							[/$/, 'string', '@popall']
						],
						dblStringBody: [
							[
								/[^\\\$"]/,
								{
									cases: {
										'@eos': { token: 'string', next: '@popall' },
										'@default': 'string'
									}
								}
							],
							[/\\./, 'string.escape'],
							[/"$/, 'string', '@popall'],
							[/"/, 'string', '@pop'],
							[/(@variable)/, 'variable'],
							[/\\$/, 'string'],
							[/$/, 'string', '@popall']
						]
					}
				};
		}
	}
]);
