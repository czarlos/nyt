# Electronic Filings sub-API
###Presidential Candidate Totals

##### *Required Params*

- cycle
- year
- month
- day

##### *Usage*
```javascript
nyt.campaignFinance.electronicFilings.candidateTotals(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electronicFilings.candidateTotals({‘cycle’:’2000-present’, ‘year’:’2012’, ‘month’:’07’, ‘day’:’01’}, console.log)
```

###Electronic Filing Form Types

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.electronicFilings.formTypes(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electronicFilings.formTypes({‘cycle’:’2008-present’}, console.log)
```


###Electronic Filing by Type

##### *Required Params*

- cycle
- form-type-ID

##### *Usage*
```javascript
nyt.campaignFinance.electronicFilings.byType(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electronicFilings.byType({‘cycle’:’2000-present’, ‘form-type-ID’:’<id>’}, console.log)
```

###Filing Summary

##### *Required Params*

- cycle
- filing-ID

##### *Usage*
```javascript
nyt.campaignFinance.electronicFilings.filingSummary(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electronicFilings.filingSummary(‘cycle’:’2008-present’, ‘filing-ID’:’<id>’)
```

###Recent Amendments

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.electronicFilings.stateAndZipTotals(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electronicFilings.stateAndZipTotals({‘cycle’:’2000-present’}, console.log)
```
`
