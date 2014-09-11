var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/mostpopular/v2/';
var keyName = 'most-popular';

function mostPopular (keys) {
	this.myKeys = keys;
}

var popularityString = function (method, args) {
    return reql.buildPath(method, args['section'], args['time-period']);
};

mostPopular.prototype.emailed = function (args, callback) {
    var specific = popularityString('mostemailed', args);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);

};
mostPopular.prototype.shared = function (args, callback) {
    var specific = popularityString('mostshared', args);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);

};
mostPopular.prototype.viewed = function (args, callback) {
    var specific = popularityString('mostviewed', args);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = mostPopular;
