var response_lib = require('./response_lib');
var reql = require('./request_lib');

var search = function (args, callback, myKeys, t) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var format = response_lib.checkField(args['format'], t.DEFAULT);
	var query = response_lib.checkQuery(args);
	var path = (t.S).concat(t.SVC, t.S, 'politics', t.S, t.V2, t.S, 'districts', t.D, format,
		t.Q, t.API_KEY, t.E, query, myKeys['districts']);

	reql.get(path, callback, args);
};

exports.search = search;