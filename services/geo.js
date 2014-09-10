var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/semantic/v2/geocodes/query';
var keyName = 'geo';

var search = function (args, callback, myKeys, t) {
    var specific = '';
    reql.createRequest(args, callback, myKeys, base, specific, keyName);
};

exports.search = search;
