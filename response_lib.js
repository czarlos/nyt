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

var checkField = function (field, defaultField) {
    if(!field) {
        field = defaultField;
    }
    return field;
}

var checkFieldAndRemove = function (field, defaultField, args) {
    if (!args[field]) {
        return defaultField;
    }
    else {
        result = args[field];
        removeArgs([field], args);
        return result;
    }

}

var checkCallback = function (args, callback) {
    if (!callback) {
        callback = args;
        args = undefined;
    }
    var returnObject = {};

    returnObject.args = args;
    returnObject.callback = callback;

    return returnObject;
}

exports.removeArgs = removeArgs;
exports.checkQuery = checkQuery;
exports.checkField = checkField;
exports.checkFieldAndRemove = checkFieldAndRemove;
exports.checkCallback = checkCallback;
