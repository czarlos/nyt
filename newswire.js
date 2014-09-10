var response_lib = require('./response_lib');
var reql = require('./request_lib');

var base = '/svc/news/v3/content';
var keyName = 'newswire';

var recent = function (args, callback, myKeys) {
    var specific = reql.buildPath(args['source'], args['section'], args['time-period']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var specific = function (args, callback, myKeys) {
    var specific = '';
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

exports.recent = recent;
exports.specific = specific;
