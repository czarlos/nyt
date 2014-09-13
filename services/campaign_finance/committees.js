var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function committees (keys) {
    this.myKeys = keys;
}

/*Committees*/

committees.prototype.search = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.details = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.new = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.contributions = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'contributions');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.contributionsToACandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'contributions', args['candidate-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.filings = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'filings');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

committees.prototype.leadership = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'leadership');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = committees;
