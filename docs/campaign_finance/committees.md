# Committees sub-API
###Committee Search

##### *Required Params*

- cycle
- query

##### *Usage*
```javascript
nyt.campaignFinance.committees.search(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.search({‘cycle’:’2000-present’, ‘query’:’obama’}, console.log)
```

###Committee Details

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.committees.details(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.details({‘cycle’:’2000-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###New Committees

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.committees.leadersByCategory(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.leadersByCategory({‘cycle’:’2000-present’}, console.log)
```

###Committee Contributions

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.committees.stateCandidates(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.stateCandidates({‘cycle’:’2000-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Committee Contributions to a Candidate

##### *Required Params*

- cycle
- FEC-ID
- candidate-ID

##### *Usage*
```javascript
nyt.campaignFinance.committees.contributionsToACandidate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.contributionsToACandidate({‘cycle’:’2012’, ‘FEC-ID’:’C00431445’, ‘candidate-ID’:’P80003338’}, console.log)
```

###Committee Filings

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.committees.names(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.names({‘cycle’:’2000-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Leadership Committees

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.committees.names(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.committees.names({‘cycle’:’2000-present’}, console.log)
```


