var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/movies/v2/reviews';
var keyName = 'movie-reviews';

function movieReviews (keys) {
	this.myKeys = keys;
}

movieReviews.prototype.byKeyword = function (args, callback) {
    var specific = reql.buildPath('search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

movieReviews.prototype.criticsPicks = function (args, callback) {
    var specific = reql.buildPath(args['resource-type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

movieReviews.prototype.byReviewer = function (args, callback) {
    var specific = reql.buildPath(args['reviewer-name']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

movieReviews.prototype.reviewerDetails = function (args, callback) {
    var specific = reql.buildPath(args['reviewer-name']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName)
}

module.exports = movieReviews;
