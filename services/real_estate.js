var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/real-estate/v2';
var keyName = 'real-estate';

function realEstate (keys) {
	this.myKeys = keys;
}

realEstate.prototype.listingsPercentile = function (args, callback) {
    var specific = reql.buildPath('listings', 'percentile', args['percentile-value']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

realEstate.prototype.listingCounts = function (args, callback) {
    var specific = reql.buildPath('listing', 'count');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

realEstate.prototype.salesPercentile = function (args, callback) {
    var specific = reql.buildPath('sales', 'percentile', args['percentile-value']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

realEstate.prototype.salesCounts = function (args, callback) {
    var specific = reql.buildPath('sales', 'count');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = realEstate;
