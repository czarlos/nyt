var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/movies/v2/reviews';
var keyName = 'movie-reviews';

var byKeyword = function (args, callback, myKeys) {
    var specific = reql.buildPath('search');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var criticsPicks = function (args, callback, myKeys) {
    var specific = reql.buildPath(args['resource-type']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var byReviewer = function (args, callback, myKeys) {
    var specific = reql.buildPath(args['reviewer-name']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var reviewerDetails = function (args, callback, myKeys) {
    var specific = reql.buildPath(args['reviewer-name']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName)
}

exports.byKeyword = byKeyword;
exports.criticsPicks = criticsPicks;
exports.byReviewer = byReviewer;
exports.reviewerDetails = reviewerDetails;
