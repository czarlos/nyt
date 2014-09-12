var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function electioneeringCommunications (keys) {
    this.myKeys = keys;
}

/* Electioneering Communications */

electioneeringCommunications.prototype.recentCommunications = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electioneeringCommunications.prototype.communicationsByCommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electioneeringCommunications.prototype.communicationsByDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'electioneering_communications',
                                    args['year'], args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = electioneeringCommunications;