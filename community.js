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

};

var byDate = function (args, callback, myKeys, t) {

};

var byUser = function (args, callback, myKeys, t) {

};

var byURL = function (args, callback, myKeys, t) {

}

exports.recent = recent;
exports.random = random;
exports.byDate = byDate;
exports.byUser = byUser;
exports.byURL = byURL;