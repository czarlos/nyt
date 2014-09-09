var response_lib = require('./response_lib');
var reql = require('./request_lib');

var get = function (args, callback, myKeys, t) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var query = response_lib.checkQuery(args);
	var format = response_lib.checkField(args['format'], t.DEFAULT);

	var path = (t.S).concat(t.SVC, t.S, 'search', t.S, t.V2, t.S, 'articlesearch',
		t.D, format, t.Q, query, t.API_KEY, t.E, myKeys['article']);
	reql.get(path, callback, args);
}

exports.get = get;
