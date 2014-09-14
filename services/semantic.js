var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/semantic/v2/concept';
var keyName = 'semantic';

function semantic (keys) {
	this.myKeys = keys;
}

semantic.prototype.name = function (args, callback) {
    var concept_type = response_lib.checkField(args['concept-type'], 'nytd_geo');
    var specific = reql.buildPath('name', concept_type, args['specific-concept']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

semantic.prototype.uri = function (args, callback) {
    var specific = reql.buildPath('uri', args['concept-uri']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

semantic.prototype.article = function (args, callback) {
    var specific = reql.buildPath('article', args['article-uri']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

semantic.prototype.search = function (args, callback) {
    var specific = reql.buildPath('search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = semantic;
