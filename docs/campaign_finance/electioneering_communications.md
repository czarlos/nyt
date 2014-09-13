# Electioneering Communications sub-API
###Recent Communications

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.electioneeringCommunications.recent(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electioneeringCommunications.recent({‘cycle’:’2000-present’}, console.log)
```

###Communications by Committee

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.electioneeringCommunications.byCommittee(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electioneeringCommunications.byCommittee({‘cycle’:’2008-present’, ‘FEC-ID’:’C00431445’}, console.log)
```

###Communications by Date

##### *Required Params*

- cycle
- year
- month
- day

##### *Usage*
```javascript
nyt.campaignFinance.electioneeringCommunications.byDate(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.electioneeringCommunications.byDate({‘cycle’:’2000-present’, ‘year’:’2008’, ‘month’:’07’, ‘day’:’01’}, console.log)
```

