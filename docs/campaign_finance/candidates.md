# Candidates sub-API
###Candidate Search

##### *Required Params*

- cycle
- query

##### *Usage*
```javascript
nyt.campaignFinance.candidates.search(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.candidates.search({‘cycle’:’2000-present’, ‘query’:’obama’}, console.log)
```

###Candidate Details

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.candidates.details(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.candidates.details({‘cycle’:’2000-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Candidate Leaders By Category

##### *Required Params*

- cycle
- category

##### *Usage*
```javascript
nyt.campaignFinance.candidates.leadersByCategory(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.candidates.leadersByCategory({‘cycle’:’2000-present’, ‘category’:’candidate-loans’}, console.log)
```

###State Candidtates

##### *Required Params*

- cycle
- state
- district (The NYT API docs claim this is not required)

##### *Usage*
```javascript
nyt.campaignFinance.candidates.stateCandidates(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.candidates.stateCandidates({‘cycle’:’2000-present’, ‘state’: ‘MA’, ‘district’:’1’}, console.log)
```

###New Candidates

##### *Required Params*

- cycle (Only current campaign cycle is supported)

##### *Usage*
```javascript
nyt.campaignFinance.candidates.names(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.candidates.names({‘cycle’:’2014’}, console.log)
```
