var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/community/v2/comments';
var keyName = 'community';

var recent = function (args, callback, myKeys, t) {
    var specific = reql.buildPath('recent');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var random = function (args, callback, myKeys, t) {
    var specific = reql.buildPath('random');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var byDate = function (args, callback, myKeys, t) {
	var date = response_lib.checkField(args['YYYYMMDD'], '');
    var specific = reql.buildPath('by-date', date);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var byUser = function (args, callback, myKeys, t) {
	var uid = response_lib.checkField(args['user-ID'], '');
    var specific = reql.buildPath('user', 'id', uid);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var byURL = function (args, callback, myKeys, t) {
	var match_type = response_lib.checkField(args['match-type'], '');
    var specific = reql.buildPath('url', match_type);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

exports.recent = recent;
exports.random = random;
exports.byDate = byDate;
exports.byUser = byUser;
exports.byURL = byURL;
