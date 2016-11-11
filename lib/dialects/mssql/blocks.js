'use strict';

var _ = require('underscore');

module.exports = function(dialect) {
	dialect.blocks.set('limit', function(params) {
		return 'top ' + dialect.builder._pushValue(params.limit);
	});
};

