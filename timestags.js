var response_lib = require('./response_lib');
var reql = require('./request_lib');

var search = function (args, callback, myKeys) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var query = response_lib.checkQuery(args);
	var path = '/'.concat('svc/', 'suggest/v1/timestags?',
				query, 'api-key=', myKeys['timestags']);
    console.log(path);
	reql.get(path, callback, args);
}

exports.search = search;
