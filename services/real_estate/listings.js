var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/real-estate/v2';
var keyName = 'real-estate';

function listings (keys) {
	this.myKeys = keys;
}

listings.prototype.percentile = function (args, callback) {
    var specific = reql.buildPath('listings', 'percentile', args['percentile-value']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

listings.prototype.counts = function (args, callback) {
    var specific = reql.buildPath('listing', 'count');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = listings;