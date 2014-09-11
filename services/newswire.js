var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/news/v3/content';
var keyName = 'newswire';

function newswire (keys) {
	this.myKeys = keys;
}

newswire.prototype.recent = function (args, callback) {
    var specific = reql.buildPath(args['source'], args['section'], args['time-period']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

newswire.prototype.specific = function (args, callback) {
    var specific = '';
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = newswire;