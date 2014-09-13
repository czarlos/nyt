var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function independentExpenditures (keys) {
    this.myKeys = keys;
}

/*Independent Expenditures*/

independentExpenditures.prototype.recent = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.byDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures',
                                    args['year'], args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.committee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.supportOrOppose = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.presidential = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.onlyCommittees = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'superpacs');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.raceTotals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures', 'race-totals',
                                    args['office']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

independentExpenditures.prototype.committeeRaceTotal = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures', 'races');
}

module.exports = independentExpenditures;
