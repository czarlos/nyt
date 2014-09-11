var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/politics/v3/us/legislative/congress';
var keyName = 'best-sellers';

function congress (keys) {
	this.myKeys = keys;
}

/*Members*/

congress.prototype.currentMembersList = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'], 
                                    'members', 'current');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberList = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'], 
                                    'members');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberBioAndRoles = function (args, callback) {
    var specific = reql.buildPath(args['member-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.newMembers = function (args, callback) {
    var specific = reql.buildPath('members', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.currentMembersByStateOrDistrict = function (args, callback) {
    var specific = reql.buildPath('members', args['chamber'], args['state'],
                                 args['district'], 'current');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.membersLeavingOffice = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'], 
                                    'members', 'leaving');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberVotePositions = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberVoteComparison = function (args, callback) {
    var specific = reql.buildPath('members', args['first-member-ID'], 
                                    'votes', args['second-member-ID'], 
                                    args['congress-number'], args['chamber']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.billsCosponsoredByAMember = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 'bills',
                                    args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberSponsorshipComparison = function (args, callback) {
    var specific = reql.buildPath('members', args['first-member-ID'], 'bills',
                                 args['second-member-ID'], args['congress-number'],
                                  args['chamber']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.memberFloorAppearances = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 
                                    'floor_appearances');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

/*Votes*/

congress.prototype.rollCallVotes = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'], 
                                    'sessions', args['sessions-number'], 
                                    'votes', 'roll-call-number');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.votesByType = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'], 
                                    'votes', args['vote-type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.votesByDate = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'votes', args['year'], args['month']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.votesByDateRange = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'votes', args['start-date'], 
                                    args['end-date']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.nominationVotes = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominations');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

/*Bills*/

congress.prototype.recentBills = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], args['chamber'],
                                    'bill', args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.billsByMember = function (args, callback) {
    var specific = reql.buildPath('members', args['member-ID'], 'bills', 
                                    args['type']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.billDetails = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', 
                                    args['bill-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.billSubjects = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'], 
                                    args['resource']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.billCosponsors = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'bills', args['bill-ID'],
                                    'cosponsors');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

/*Nominees*/

congress.prototype.nomineeLists = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 
                                        args['nomination-category']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.nomineeDetails = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 
                                    args['nominee-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.nomineesByState = function (args, callback) {
    var specific = reql.buildPath(args['congress-number'], 'nominees', 'state', 
                                    args['ST']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

/*Other*/

congress.prototype.nomineeLists = function (args, callback) {
    var specific = reql.buildPath('states', 'members', 'party');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.nomineeDetails = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'committees', 
                                    args['committee-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

congress.prototype.nomineesByState = function (args, callback) {
    var specific = reql.buildPath(args['chamber'], 'schedule');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = congress;