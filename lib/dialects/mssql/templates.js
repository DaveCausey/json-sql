'use strict';

var _ = require('underscore');
var templateChecks = require('../../utils/templateChecks');

module.exports = function(dialect) {
	// patch parent select template to move the limit clause
	var selectTemplate = dialect.templates.get('select');
	selectTemplate.pattern = selectTemplate.pattern.replace(/\s*{limit}\s*/, ' ')
    .replace(/ select /, ' select {limit} ');
	dialect.templates.set('select', selectTemplate);
};
