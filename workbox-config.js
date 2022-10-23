module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,jpg,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};