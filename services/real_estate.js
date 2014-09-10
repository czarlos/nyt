var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/real-estate/v2';
var keyName = 'real-estate';

var listingsPercentile = function (args, callback, myKeys) {
    var specific = reql.buildPath('listings', 'percentile', args['percentile-value']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var listingCounts = function (args, callback, myKeys) {
    var specific = reql.buildPath('listing', 'count');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

var salesPercentile = function (args, callback, myKeys) {
    var specific = reql.buildPath('sales', 'percentile', args['percentile-value']);
}

var salesCounts = function (args, callback, myKeys) {
    var specific = reql.buildPath('sales', 'count');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
}

exports.listingsPercentile = listingsPercentile;
exports.listingCounts = listingCounts;
exports.salesPercentile = salesPercentile;
exports.salesCounts = salesCounts;
