var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function votes (keys) {
    this.myKeys = keys;
}

/*Votes*/

votes.prototype.rollCall = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'sessions', args['sessions-number'],
                                    'votes', 'roll-call-number');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

votes.prototype.byType = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'votes', args['vote-type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

votes.prototype.byDate = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'votes', args['year'], args['month']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

votes.prototype.byDateRange = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'votes', args['start-date'],
                                    args['end-date']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

votes.prototype.nomination = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominations');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = votes
