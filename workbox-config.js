module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,js,json,css,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};