# Other sub-API

###State Party Counts

##### *Required Params*

- N/A

##### *Usage*
```javascript
nyt.congress.other.statePartyCounts(args, callback)
```

##### *Example*
```javascript
nyt.congress.other.statePartyCounts({}, console.log)
```

###Committees and Committee Members

##### *Required Params*

- congress-number
- chamber
- committee-ID

##### *Usage*
```javascript
nyt.congress.other.comittees(args, callback)
```

##### *Example*
```javascript
nyt.congress.other.comittees({‘congress-number’:’110’,
‘chamber’:’house’,’committee-ID’:’1’}, console.log)
```

###Chamber Schedule

##### *Required Params*

- chamber

##### *Usage*
```javascript
nyt.congress.other.chamberSchedule(args, callback)
```

##### *Example*
```javascript
nyt.congress.other.chamberSchedule({‘chamber’:’house’}, console.log)
```
