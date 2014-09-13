var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function electronicFilings (keys) {
    this.myKeys = keys;
}

/* Electronic Filings */

electronicFilings.prototype.totals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', args['year'],
                                    args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electronicFilings.prototype.formTypes = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'types');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electronicFilings.prototype.byType = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'types',
                                    args['form-type-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electronicFilings.prototype.filingSummary = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', args['filing-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

electronicFilings.prototype.recentAmendments = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'amendments');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = electronicFilings;
