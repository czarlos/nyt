var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function bills (keys) {
    this.myKeys = keys;
}

/*Bills*/

bills.prototype.recent = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'bill', args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.byMember = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 'bills',
                                    args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.details = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills',
                                    args['bill-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.subjects = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'],
                                    args['resource']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.cosponsors = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'],
                                    'cosponsors');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = bills;
