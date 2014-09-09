var response_lib = require('./response_lib');
var reql = require('./request_lib');

var recent = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var source = response_lib.checkField(args['source'], '');
    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var section = response_lib.checkField(args['section'], '');
    var timePeriod = response_lib.checkField(args['time-period'], '');

    var query = response_lib.checkQuery(args);
    var path = (t.S).concat(t.SVC, t.S, 'news', t.S, t.V3, t.S, 'content', 
     t.S, source, t.S, section, t.S, timePeriod, t.D, format, t.Q,
     query, t.API_KEY, t.E, myKeys['newswire']);

    reql.get(path, callback, args);
}

var specific = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var query = response_lib.checkQuery(args);
    var path = (t.S).concat(t.SVC, t.S, 'news', t.S, t.V3, t.S, 'content', t.D,
     t.DEFAULT, t.Q, query, t.API_KEY, t.E, myKeys['newswire']);

    reql.get(path, callback, args);
}

exports.recent = recent;
exports.specific = specific;