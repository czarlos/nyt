var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/semantic/v2/geocodes/query';
var keyName = 'geo';

function geo (keys) {
	this.myKeys = keys;
}

geo.prototype.search = function (args, callback) {
    var specific = '';
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = geo;
