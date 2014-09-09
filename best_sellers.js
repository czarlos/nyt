var response_lib = require('./response_lib');
var reql = require('./request_lib');

        var get = function (args, callback, myKeys, t) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var date = response_lib.checkField(args['date'], '');
            var list_name = args['list-name'];
            args = response_lib.removeArgs(['date', 'list-name'], args);
            var query = response_lib.checkQuery(args);
            var format = response_lib.checkField(args['format'], t.DEFAULT);

            var path = (t.S).concat(t.SVC, t.S, 'books', t.S, t.V2, t.S, 'lists', t.S,
                               date, t.S, list_name, t.S, t.D, format, query, t.Q,
                               t.API_KEY, t.E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        };

        var search = function (args, callback, myKeys, t) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], t.DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = (t.S).concat(t.SVC, t.S, 'books', t.S, t.V2, t.S, 'lists', t.D, format, t.Q,
                               query, t.API_KEY, t.E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        };

        var history = function (args, callback, myKeys, t) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], t.DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = (t.S).concat(t.SVC, t.S, 'books', t.S, t.V2, t.S, 'lists', t.S,
                                'best-sellers', t.S, 'history', t.D, format,
                                t.Q, query, t.API_KEY, t.E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        };

        var overview = function (args, callback, myKeys, t) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = response_lib.checkQuery(args);
            var format = response_lib.checkField(args['format'], t.DEFAULT);
            var path = (t.S).concat(t.SVC, t.S, 'books', t.S, t.V2, t.S, 'lists', t.S, 'overview',
                                   t.D, format, t.Q, query, t.API_KEY, t.E,
                                   myKeys['best-sellers']);
            reql.get(path, callback, args);
        };

        var names = function (args, callback, myKeys, t) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], t.DEFAULT);
            var path = (t.S).concat(t.SVC, t.S, 'books', t.S, t.V2, t.S, 'lists', t.S, 'names',
                               t.D, format, t.Q, t.API_KEY, t.E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        }

exports.get = get;
exports.search = search;
exports.history = history;
exports.overview = overview;
exports.names = names;