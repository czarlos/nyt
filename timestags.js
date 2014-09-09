var response_lib = require('./response_lib');
var reql = require('./request_lib');

var A = '&';
var Q = '?';
var E = '=';
var S = '/';
var D = '.';
var API_KEY = 'api-key';
var V1 = 'v1';
var V2 = 'v2';
var V3 = 'v3';
var DEFAULT = 'json';
var SVC = 'svc';

var search = function (args, callback, myKeys) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var query = response_lib.checkQuery(args);
	var path = S.concat(SVC, S, 'suggest', S, V1, S, 'timestags', Q, 
				query, API_KEY, E, myKeys['timestags']);
	
	reql.get(path, callback, args);

}

exports.search = search;