var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function bills (keys) {
    this.myKeys = keys;
}

/*Bills*/

bills.prototype.recentBills = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'bill', args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.billsByMember = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 'bills', 
                                    args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.billDetails = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', 
                                    args['bill-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.billSubjects = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'], 
                                    args['resource']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

bills.prototype.billCosponsors = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'],
                                    'cosponsors');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = bills;