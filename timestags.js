var response_lib = require('./response_lib');
var reql = require('./request_lib');

var search = function (args, callback, myKeys, t) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var query = response_lib.checkQuery(args);
	var path = (t.S).concat(t.SVC, t.S, 'suggest', t.S, t.V1, t.S, 'timestags', t.Q,
				query, t.API_KEY, t.E, myKeys['timestags']);

	reql.get(path, callback, args);
}

exports.search = search;
