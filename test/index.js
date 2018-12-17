'use strict';
require('harmonize')();
var rootPath = require('../');
var Metalsmith = require('metalsmith');
var assert = require('assert');
var rm = require('rimraf').sync;
var path = require('path');
var permalinks = require('metalsmith-permalinks');

describe('metalsmith-rootpath', function () {
	beforeEach(function () {
		rm('/test/fixtures/static/build');
	});

	after(function () {
		rm('/test/fixtures/reorder/build');
	})
});
