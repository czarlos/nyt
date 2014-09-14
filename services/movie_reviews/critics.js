var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/movies/v2/reviews';
var keyName = 'movie-reviews';

function critics (keys) {
	this.myKeys = keys;
}

critics.prototype.reviewerDetails = function (args, callback) {
    var specific = reql.buildPath(args['reviewer-name']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName)
}

module.exports = critics;
