var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function lateContributions (keys) {
    this.myKeys = keys;
}

/*Presidential Campaigns*/

lateContributions.prototype.presidentialCandidateTotals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'totals');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.candidateDetails = function (args, callback) {
    var specific  = reql.buildPath(args['cycle'], 'president', 'candidates',
                                  args['Name|CommitteeID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.presidentialStateAndZipTools = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', args['resource-type'],
                                 args['location']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = lateContributions;