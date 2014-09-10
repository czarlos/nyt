var response_lib = require('./response_lib');
var reql = require('./request_lib');

var base = '/svc/search/v2/articlesearch';
var keyName = 'article-search';

var get = function (args, callback, myKeys) {
    var specific = '';
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

exports.get = get;
