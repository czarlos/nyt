var response_lib = require('../../lib/response_lib');
var reql = require('../../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'congress';

function members (keys) {
    this.myKeys = keys;
}

/*Members*/

members.prototype.currentMembersList = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'members', 'current');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.memberList = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'members');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.bioAndRoles = function (args, callback) {
    var specific = reql.buildPath(args['member-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.new = function (args, callback) {
    var specific = reql.buildPath('members', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.byStateOrDistrict = function (args, callback) {
    var specific = reql.buildPath('members', args['chamber'], args['state'],
                                 args['district'], 'current');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.leavingOffice = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'members', 'leaving');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.votePositions = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.voteComparison = function (args, callback) {
    var specific = reql.buildPath('members', args['first-member-ID'],
                                    'votes', args['second-member-ID'],
                                    args['congress-number'], args['chamber']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.cosponsoredBills = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 'bills',
                                    args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.sponsorshipComparison = function (args, callback) {
    var specific = reql.buildPath('members', args['first-member-ID'], 'bills',
                                 args['second-member-ID'], args['congress-number'],
                                  args['chamber']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

members.prototype.floorAppearances = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'],
                                    'floor_appearances');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = members;
