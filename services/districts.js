var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/politics/v2/districts';
var keyName = 'districts';

function districts (keys) {
	this.myKeys = keys;
}

districts.prototype.search = function (args, callback) {
    var specific = '';
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = districts;
