# Presidential Campaigns sub-API
###Presidential Candidate Totals

##### *Required Params*

- cycle

##### *Usage*
```javascript
nyt.campaignFinance.presidentialCampaigns.candidateTotals(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.presidentialCampaigns.candidateTotals({‘cycle’:’2000-present’}, console.log)
```

###Candidate Details

##### *Required Params*

- cycle (Must be an even numbed year, 2008-present)
- Name || CommitteeID

##### *Usage*
```javascript
nyt.campaignFinance.presidentialCampaigns.details(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.presidentialCampaigns.details({‘cycle’:’2008-present’, ‘Name’:’obama’}, console.log)
```

###Presidential State/ZIP Totals

##### *Required Params*

- cycle
- resource-type
- location

##### *Usage*
```javascript
nyt.campaignFinance.presidentialCampaigns.stateAndZipTotals(args, callback)
```

##### *Example*
```javascript
nyt.campaignFinance.presidentialCampaigns.stateAndZipTotals({‘cycle’:’2000-present’, ‘resource-type’:’2008-present’, ‘location’:’MA’}, console.log)
```

