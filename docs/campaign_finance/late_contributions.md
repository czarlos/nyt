# Late Contributions to Candidates sub-API
###Today’s Late Contributions

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.lateContributions.today(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lateContributions.today({‘cycle’:’2000-present’}, console.log)
```

###Late Contributions to a Candidate

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.lateContributions.toACandidate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lateContributions.toACandidate({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Late Contributions to a Committee
##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.lateContributions.toACommittee(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lateContributions.toACommittee({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Presidential Independent Expenditures
##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.lateContributions.presidential(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lateContributions.presidential({‘cycle’:’2008-present’}, console.log)
```

###Late Contributions by Date
##### *Required Params*

- cycle
- year
- month
- day

##### *Usage*
```javascript
nyt.campaignFinance.lateContributions.byDate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lateContributions.byDate({‘cycle’:’2008-present’, ‘year’:’2012’, ‘month’:’07’, ‘day’:’01’}, console.log)
```

