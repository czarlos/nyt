var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function nominees (keys) {
	this.myKeys = keys;
}

/*Nominees*/

nominees.prototype.nomineeLists = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 
                                        args['nomination-category']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

nominees.prototype.nomineeDetails = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 
                                    args['nominee-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

nominees.prototype.nomineesByState = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 'state', 
                                    args['ST']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = nominees;