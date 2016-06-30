var dest = './build';
var src = './src';

module.exports = {

	src: src,
	dest: dest,
	browserSync: {
		server: {
			baseDir: dest
		}
	},

	markup: {
		src: src + '/htdocs/**',
		dest: dest
	},

	browserify: {
		bundleConfigs: [{
			entries: src + '/javascript/libs/framer.js',
			dest: dest + '/assets/js',
			outputName: 'global.js'
		}, {
			entries: src + '/javascript/main.coffee',
			dest: dest + '/assets/js',
			outputName: 'main.js',
			extensions: ['.coffee']
		}]
	}

}