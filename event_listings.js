var response_lib = require('./response_lib');
var reql = require('./request_lib');

var search = function (args, callback, myKeys, t) {
    var callbackReturn = response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['format'], t.DEFAULT);
    var query = response_lib.checkQuery(args);

    var path = (t.S).concat(t.SVC, t.S, 'events', t.S, t.V2, t.S, 'listings', t.D, format, 
                t.Q, query, t.API_KEY, t.E, myKeys['event-listings']);

    reql.get(path, callback, args);
}

exports.search = search;