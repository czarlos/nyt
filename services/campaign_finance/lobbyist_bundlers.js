var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function lobbyistBundlers (keys) {
    this.myKeys = keys;
}

/*Lobbyist Bundlers*/

lobbyistBundlers.prototype.toACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'lobbyist_bundlers');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = lobbyistBundlers;
