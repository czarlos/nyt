var response_lib = require('./response_lib');
var reql = require('./request_lib');

var emailed = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);
    var section = response_lib.checkField(args['section'], '');
    var timePeriod = response_lib.checkField(args['time-period'], '');

    var path = (t.S).concat(t.SVC, t.S, 'mostpopular', t.S, t.V2, 'mostemailed',
     t.S, section, t.S, timePeriod, t.D, format, t.Q, query,
     t.API_KEY, t.E, myKeys['most-popular']);
    reql.get(path, callback, args);
};
var shared = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);
    var section = response_lib.checkField(args['section'], '');
    var timePeriod = response_lib.checkField(args['time-period'], '');

    var path = (t.S).concat(t.SVC, t.S, 'mostpopular',t.S, t.V2, 'mostshared', t.S,
     section, t.S, timePeriod, t.D, format, t.Q, query, t.API_KEY,
     t.E, myKeys['most-popular']);
    reql.get(path, callback, args);
};
var viewed = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);
    var section = response_lib.checkField(args['section'], '');
    var timePeriod = response_lib.checkField(args['time-period'], '');

    var path = (t.S).concat(t.SVC, t.S, 'mostpopular', t.S, t.V2, t.S, 'mostviewed', t.S,
     section, t.S, timePeriod, t.D, format, t.Q, query, t.API_KEY,
     t.E, myKeys['most-popular']);
    reql.get(path, callback, args);
};

exports.emailed = emailed;
exports.shared = shared;
exports.viewed = viewed;