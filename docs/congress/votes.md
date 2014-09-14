# Votes sub-API

###Roll-Call Votes

##### *Required Params*

- congress-number
- chamber
- session-number
- roll-call-number

##### *Usage*
```javascript
nyt.congress.votes.rollCall(args, callback)
```

##### *Example*
```javascript
nyt.congress.votes.rollCall({‘congress-number’:’105’, 
‘chamber’:’house’, ‘session-number’:’<number>’, ‘roll-call-number’:’<number>’}, console.log)
```

###Vote by Type

##### *Required Params*

- congress-number
- chamber
- vote-type

##### *Usage*
```javascript
nyt.congress.votes.byType(args, callback)
```

##### *Example*
```javascript
nyt.congress.votes.byType({‘congress-number’:’105’, 
‘chamber’:’house’, ‘vote-type’:’missed_votes’}, console.log)
```

###Vote by Date

##### *Required Params*

- chamber
- year
- month

##### *Usage*
```javascript
nyt.congress.votes.byDate(args, callback)
```

##### *Example*
```javascript
nyt.congress.votes.byDate({‘chamber’:’house’, 
‘year’:’2010’, ‘month’:’07’}, console.log)
```

###Vote by Date Range

##### *Required Params*

- chamber
- start-date
- end-date

##### *Usage*
```javascript
nyt.congress.votes.byDate(args, callback)
```

##### *Example*
```javascript
nyt.congress.votes.byDate({‘chamber’:’house’, 
‘start-date’:’2010-02-22’, ‘month’:’2012-02-22’}, console.log)
```

###Nomination Votes

##### *Required Params*

- congress-number

##### *Usage*
```javascript
nyt.congress.votes.nomination(args, callback)
```

##### *Example*
```javascript
nyt.congress.votes.nomination({‘congress-number’:’101’}, console.log)
````
