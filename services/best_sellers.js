var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/books/v2/lists';
var keyName = 'best-sellers';

function bestSellers (keys) {
    this.myKeys = keys;
}

bestSellers.prototype.get = function (args, callback) {
    var date = response_lib.checkField(args['YYYY-MM-DD'], '');
    var specific = reql.buildPath(date, args['list-name']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bestSellers.prototype.search = function (args, callback) {
    var specific = reql.buildPath(args['list-name']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bestSellers.prototype.history = function (args, callback) {
    var specific = reql.buildPath('best-sellers', 'history');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bestSellers.prototype.overview = function (args, callback) {
    var specific = reql.buildPath('overview');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bestSellers.prototype.names = function (args, callback) {
    var specific = reql.buildPath('names');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = bestSellers;
