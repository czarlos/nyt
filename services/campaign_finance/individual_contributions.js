var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function individualContributions (keys) {
    this.myKeys = keys;
}

/*Individual Contributions*/

individualContributions.prototype.contributionsByPresidentialFiling = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'filing',
                                    args['filing-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

individualContributions.prototype.contributionsByCommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'committee',
                                    args['FEC-ID'], 'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

individualContributions.prototype.contributionsByCandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'candidate',
                                    args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = individualContributions;