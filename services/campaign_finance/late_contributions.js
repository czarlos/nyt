var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function lateContributions (keys) {
    this.myKeys = keys;
}

/*Late Contributions To Candidates*/

lateContributions.prototype.today = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.toACandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID'],
                                    '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.toACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.presidential = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

lateContributions.prototype.byDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', '48hour',
                                    args['year'], args['month'], args['date']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = lateContributions;
