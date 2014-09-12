var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function independentExpenditures (keys) {
    this.myKeys = keys;
}

/*Independent Expenditures*/

independentExpenditures.prototype.recentIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.independentExpendituresByDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures',
                                    args['year'], args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.committeeIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.independentExpendituresThatSupportOrOppose = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.presidentialIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.independentExpenditureOnlyCommittees = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'superpacs');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.raceTotals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures', 'race-totals',
                                    args['office']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.raceTotalForACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures', 'races');
}

module.exports = independentExpenditures;