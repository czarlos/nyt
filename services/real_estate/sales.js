var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/real-estate/v2';
var keyName = 'real-estate';

function sales (keys) {
	this.myKeys = keys;
}

sales.prototype.percentile = function (args, callback) {
    var specific = reql.buildPath('sales', 'percentile', args['percentile-value']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

sales.prototype.counts = function (args, callback) {
    var specific = reql.buildPath('sales', 'count');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = sales;
