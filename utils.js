var util = require('util');
var querystring = require('querystring');

var removeArgs = function (argsToStrip, args) {
    for(var key in argsToStrip) {
        delete args[argsToStrip[key]];
    }
    return args;
}

var checkQuery = function (args) {
    var A = '&';
    var query = '';
    var argString = querystring.stringify(args);
    if (argString) {
        query = argString + A;
    }
    return query;
}

var checkCallback = function (args, callback) {
    if (!callback) {
        callback = args;
        args = undefined;
    }
}

exports.removeArgs = removeArgs;
exports.checkQuery = checkQuery;
exports.checkCallback = checkCallback;
