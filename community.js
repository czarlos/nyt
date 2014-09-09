var response_lib = require('./response_lib');
var reql = require('./request_lib');

var recent = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);
    var path = (t.S).concat(t.SVC, t.S, 'community', t.S, t.V2, t.S, 'comments', t.S, 'recent',
                 t.D, format, t.Q, 'force-replies', t.E, '0', t.A,
                 query, t.A, t.API_KEY, t.E, myKeys['community']);
    reql.get(path, callback, args);
};

var random = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var path = (t.S).concat(t.SVC, t.S, 'community', t.S, t.V2, t.S, 'comments', t.S,'random',
                            t.D, format, t.Q, t.API_KEY, t.E, myKeys['community']);
    reql.get(path, callback, args);
};

var byDate = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var date = response_lib.checkField(args['YYYYMMDD'], '');
    response_lib.removeArgs(['YYYYMMDD'], args);
    var query = response_lib.checkQuery(args);
    var path = (t.S).concat(t.SVC, t.S, 'community', t.S, t.V2, t.S, 'comments', t.S,
    						'by-date', t.S, date, t.D, format, t.Q, query, t.API_KEY, t.E,
    						myKeys['community']);
    console.log(path);
    reql.get(path, callback, args);
};

var byUser = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);

};

var byURL = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);

}

exports.recent = recent;
exports.random = random;
exports.byDate = byDate;
exports.byUser = byUser;
exports.byURL = byURL;
