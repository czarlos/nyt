var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

function timestags (keys) {
	this.myKeys = keys;
}

timestags.prototype.search = function (args, callback, myKeys) {
	var callbackReturn = response_lib.checkCallback(args, callback);
	args = callbackReturn.args;
	callback = callbackReturn.callback;

	var query = response_lib.checkQuery(args);
	var path = '/'.concat('svc/', 'suggest/v1/timestags?',
				query, 'api-key=', this.myKeys['timestags']);
	reql.get(path, callback, args);
   console.log("THIS");
};

module.exports = timestags;
