var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function candidates (keys) {
    this.myKeys = keys;
}

/*Candidates*/

candidates.prototype.search = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', 'search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

candidates.prototype.details = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

candidates.prototype.leadersByCategory = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', 'leaders',
                                    args['category']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

candidates.prototype.stateCandidates = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'seat', args['state'],
                                    args['chamber'], args['district']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

candidates.prototype.newCandidates = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidate', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = candidates;
