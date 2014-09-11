var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/events/v2/listings';
var keyName = 'event-listings';

function eventListings (keys) {
	this.myKeys = keys;
}

eventListings.prototype.search = function (args, callback) {
    var specific = '';
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = eventListings;
