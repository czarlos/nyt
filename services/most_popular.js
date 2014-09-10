var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/mostpopular/v2/';
var keyName = 'most-popular';

var popularityString = function (method, args) {
    return reql.buildPath(method, args['section'], args['time-period']);
};

var emailed = function (args, callback, myKeys, t) {
    var specific = popularityString('mostemailed', args);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);

};
var shared = function (args, callback, myKeys, t) {
    var specific = popularityString('mostshared', args);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);

};
var viewed = function (args, callback, myKeys, t) {
    var specific = popularityString('mostviewed', args);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

exports.emailed = emailed;
exports.shared = shared;
exports.viewed = viewed;
