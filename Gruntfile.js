module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['*.js', '!*.min.js'],

			options: {
				jshintrc: true
			}
		},

		uglify: {
			jquery: {
				files: {}
			}
		},

		jquery: {}
	});


	grunt.registerTask('jquery', function (exportName, uglify) {
		if (exportName == 'min') {
			exportName = null;
			uglify = 'min';
		}

		if (!exportName) {
			exportName = 'sortable';
		}

		var fs = require('fs'),
			filename = 'jquery.fn.' + exportName + '.js';

		grunt.log.oklns(filename);

		fs.writeFileSync(
			filename,
			(fs.readFileSync('jquery.binding.js') + '')
				.replace('$.fn.sortable', '$.fn.' + exportName)
				.replace('/* CODE */',
					(fs.readFileSync('./node_modules/sortablejs/Sortable.js') + '')
						.replace(/^[\s\S]*?function[\s\S]*?(var[\s\S]+)\/\/\s+Export[\s\S]+/, '$1')
				)
		);

		if (uglify) {
			var opts = {};

			opts['jquery.fn.' + exportName + '.min.js'] = filename;
			grunt.config.set('uglify.jquery.files', opts);

			grunt.task.run('uglify:jquery');
		}
	});


	grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('tests', ['jshint']);
	grunt.registerTask('default', ['jquery', 'jquery:min', 'tests']);
};
