# Independent Expenditures sub-API
###Recent Independent Expenditures

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.recent(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.recent({‘cycle’:’2000-present’}, console.log)
```

###Independent Expenditures by Date

##### *Required Params*

- cycle
- year
- month
- day

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.byDate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.byDate({‘cycle’:’2008-present’, ‘year’:’2012’, ‘month’:’07’,’day’:’01’}, console.log)
```

###Committee Independent Expenditures

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.committee(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.committee({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Independent Expenditures That Support or Oppose a Candidate
##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.supportOrOpposeACandidate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.supportOrOpposeACandidate({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Presidential Independent Expenditures
##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.presidential(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.presidential({‘cycle’:’2008-present’}, console.log)
```

###Independent Expenditure-Only Committees
##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.onlyCommittees(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.onlyCommittees({‘cycle’:’2008-present’}, console.log)
```

###Race Totals
##### *Required Params*

- cycle
- office

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.raceTotals(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.raceTotals({‘cycle’:’2008-present’, ‘office’:’president’}, console.log)
```

###Race Total for a Committee
##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.independentExpenditures.committeeRaceTotal(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.independentExpenditures.committeeRaceTotal({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```
