var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/elections/us/v3/finances';
var keyName = 'campaign-finance';

function campaignFinance (keys) {
    this.myKeys = keys;
}

/*Candidates*/

campaignFinance.prototype.candidateSearch = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', 'search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.candidateDetails = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.candidateLeadersByCategory = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', 'leaders'
                                    args['category']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.stateCandidates = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'seat', args['state'],
                                    args['chamber'], args['district']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.newCandidates = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidate', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Committees*/

campaignFinance.prototype.committeeSearch = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'search');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.committeeDetails = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.newCommittees = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'new');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.committeeContributions = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'contributions');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.committeeContributionsToACandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'contributions', args['candidate-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.committeeFilings = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'filings');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.leadershipCommittees = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'leadership');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Presidential Campaigns*/

campaignFinance.prototype.presidentialCandidateTotals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'totals');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.candidateDetails = function (args, callback) {
    var specific  = reql.buildPath(args['cycle'], 'president', 'candidates',
                                  args['Name|CommitteeID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.presidentialStateAndZipTools = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', args['resource-type'],
                                 args['location']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Electronic filings*/

campaignFinance.prototype.presidentialCandidateTotalsElectronic = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', args['year'],
                                    args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.electronicFilingFormTypes = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'types');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.electronicFilingsByType = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'types',
                                    args['form-type-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.presidentialFilingSummary = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', args['filing-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.recentAmendments = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'filings', 'amendments');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Electioneering Communications*/

campaignFinance.prototype.recentCommunications = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.communicationsByCommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.communicationsByDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'electioneering_communications',
                                    args['year'], args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Individual Contributions*/

campaignFinance.prototype.contributionsByPresidentialFiling = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'filing',
                                    args['filing-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.contributionsByCommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'committee',
                                    args['FEC-ID'], 'electioneering_communications');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.contributionsByCandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', 'candidate',
                                    args['FEC-ID']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Independent Expenditures*/

campaignFinance.prototype.recentIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.independentExpendituresByDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures',
                                    args['year'], args['month'], args['day']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.committeeIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.independentExpendituresThatSupportOrOppose = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID'],
                                    'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.presidentialIndependentExpenditures = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.independentExpenditureOnlyCommittees = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', 'superpacs');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.raceTotals = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'independent_expenditures', 'race-totals',
                                    args['office']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.raceTotalForACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'independent_expenditures', 'races');
}

/*Late Contributions To Candidates*/

campaignFinance.prototype.todaysLateContributions = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.lateContributionsToACandidate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'candidates', args['FEC-ID'],
                                    '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.lateContributionsToACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    '48hour');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.presidentialIndependentExpendituresLate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'president', 'independent_expenditures');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

campaignFinance.prototype.lateContributionsByDate = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'contributions', '48hour',
                                    args['year'], args['month'], args['date']);
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

/*Lobbyist Bundlers*/

campaignFinance.prototype.lobbyistBundlersToACommittee = function (args, callback) {
    var specific = reql.buildPath(args['cycle'], 'committees', args['FEC-ID'],
                                    'lobbyist_bundlers');
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
}

module.exports = campaignFinance;
