'use strict';
var path = require('path');

module.exports = plugin;

function plugin() {
	return function (files, metalsmith, done) {
		Object.keys(files).forEach(function (file) {
			setImmediate(done);

			var paths = files[file].path.split(path.sep);
            paths.pop();
            
			files[file].rurl = paths.join("/");
		});
	};
}

