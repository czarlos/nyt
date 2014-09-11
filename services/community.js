var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/community/v2/comments';
var keyName = 'community';

function community (keys) {
    this.myKeys = keys;
}

community.prototype.recent = function (args, callback) {
    var specific = reql.buildPath('recent');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

community.prototype.random = function (args, callback) {
    var specific = reql.buildPath('random');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

community.prototype.byDate = function (args, callback) {
	var date = response_lib.checkField(args['YYYYMMDD'], '');
    var specific = reql.buildPath('by-date', date);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

community.prototype.byUser = function (args, callback) {
	var uid = response_lib.checkField(args['user-ID'], '');
    var specific = reql.buildPath('user', 'id', uid);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

community.prototype.byURL = function (args, callback) {
	var match_type = response_lib.checkField(args['match-type'], '');
    var specific = reql.buildPath('url', match_type);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = community;
