'use strict';
var needles = require('needle-string');

module.exports = plugin;

function plugin() {
	return function (files, metalsmith, done) {
		Object.keys(files).forEach(function (file) {
			setImmediate(done);

			var paths = files[file].path.split("\\");
            paths.pop();
            var path = paths.join("/");
            
			files[file].rurl = path;
		});
	};
}

