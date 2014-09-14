var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function other (keys) {
	this.myKeys = keys;
}

/*Other*/

other.prototype.statePartyCounts = function (args, callback) {
    var specific = reql.buildPath('states', 'members', 'party');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

other.prototype.committees = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'committees',
                                    args['committee-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

other.prototype.chamberSchedule = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'schedule');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = other;
