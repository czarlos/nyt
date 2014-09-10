var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/semantic/v2/concept';
var keyName = 'semantic';

var name = function (args, callback, myKeys) {
    var concept_type = response_lib.checkField(args['concept-type'], 'nytd_geo');
    var specific = reql.buildPath('name', concept_type, args['specific-concept']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var uri = function (args, callback, myKeys) {
    var specific = reql.buildPath('uri', args['concept-uri']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var article = function (args, callback, myKeys) {
    var specific = reql.buildPath('article', args['article-uri']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var search = function (args, callback, myKeys) {
    var specific = reql.buildPath('search');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

exports.name = name;
exports.uri = uri;
exports.article = article;
exports.search = search;
