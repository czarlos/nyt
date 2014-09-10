var response_lib = require('./response_lib');
var reql = require('./request_lib');

var base = '/svc/books/v2/lists';
var keyName = 'best-sellers';

var get = function (args, callback, myKeys) {
    //var date = response_lib.checkFieldAndRemove('YYYY-MM-DD', '', args);
    var date = response_lib.checkField(args['YYYY-MM-DD'], '');
    var specific = reql.buildPath(date, args['list-name']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var search = function (args, callback, myKeys) {
    var specific = reql.buildPath(args['list-name']);
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var history = function (args, callback, myKeys) {
    var specific = reql.buildPath('best-sellers', 'history');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var overview = function (args, callback, myKeys) {
    var specific = reql.buildPath('overview');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

var names = function (args, callback, myKeys) {
    var specific = reql.buildPath('names');
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

exports.get = get;
exports.search = search;
exports.history = history;
exports.overview = overview;
exports.names = names;
