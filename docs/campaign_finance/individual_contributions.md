# Individual Contributions sub-API
###Contributions by Presidential Filing

##### *Required Params*

- cycle
- filing-ID

##### *Usage*
```javascript
nyt.campaignFinance.individualContribution.byPresidentialFiling(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.individualContribution.byPresidentialFiling({‘cycle’:’2000-present’, ‘filing-ID’:’<id>’}, console.log)
```

###Communications by Committee

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.individualContribution.byCommittee(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.individualContribution.byCommittee({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Communications by Candidate

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.individualContribution.byCandidate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.individualContribution.byCandidate({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```
