# Lobbyist Bundlers sub-API
###Lobbyist Bundlers to a Committee

##### *Required Params*

- cycle
- FEC-ID

##### *Usage*
```javascript
nyt.campaignFinance.lobbyistBundlers.toACommittee(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.lobbyistBundlers.toACommittee({‘cycle’:’2000-present’, 'FEC-ID':'C00431445'}, console.log)
```