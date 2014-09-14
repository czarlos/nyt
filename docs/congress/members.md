# Members sub-API

###Current Member List

##### *Required Params*

- congress-number
- chamber

##### *Usage*
```javascript
nyt.congress.members.currentMembersList(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.currentMembersList({‘congress-number’:’105’, 
‘chamber’:’house’}, console.log)
```

###Member List

##### *Required Params*

- congress-number
- chamber

##### *Usage*
```javascript
nyt.congress.members.memberList(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.membersList({‘congress-number’:’105’, 
‘chamber’:’house’}, console.log)
```

###Member Bio and Roles

##### *Required Params*

- member

##### *Usage*
```javascript
nyt.congress.members.bioAndRoles(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.bioAndRoles({‘member-ID’:’<id>’}, console.log)
```

###New Members

##### *Required Params*

- N/A

##### *Usage*
```javascript
nyt.congress.members.new(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.new({}, console.log)
```

###Current Members by State/District

##### *Required Params*

- chamber
- state

##### *Usage*
```javascript
nyt.congress.members.byStateOrDistrict(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.byStateOrDistrict({‘chamber’:’house’, ‘state’:’MA’}, console.log)
```

###Members Leaving Office

##### *Required Params*

- congress-number
- chamber

##### *Usage*
```javascript
nyt.congress.members.leavingOffice(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.leavingOffice({‘chamber’:’house’, ‘congress-number’:’105’}, console.log)
```

###Members Vote Positions

##### *Required Params*

- member-ID

##### *Usage*
```javascript
nyt.congress.members.votePositions(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.votePositions({‘member-ID’:’<id>’}, console.log)
```

###Members Vote Comparison

##### *Required Params*

- first-member-ID
- second-member-ID
- congress-number
- chamber

##### *Usage*
```javascript
nyt.congress.members.voteComparison(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.voteComparison({‘first-member-ID’:’<id>’, ‘second-member-ID’:’<id>’, ‘congress-number’:’105’, ‘chamber’:’house’}, console.log)
```

###Bills Cosponsored by a Member

##### *Required Params*

- member-ID
- type

##### *Usage*
```javascript
nyt.congress.members.cosponsoredBills(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.cosponsoredBills({‘member-ID’:’<id>’, ‘type’:’withdrawn’}, console.log)
```

###Member Sponsorship Comparison

##### *Required Params*

- first-member-ID
- second-member-ID
- congress-number
- chamber

##### *Usage*
```javascript
nyt.congress.members.sponsorshipComparison(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.sponsorshipComparison({‘first-member-ID’:’<id>’, ‘second-member-ID’:’<id>’, ‘congress-number’:’105’, ‘chamber’:’house’}, console.log)
```

###Members Floor Appearances

##### *Required Params*

- member-ID

##### *Usage*
```javascript
nyt.congress.members.floorAppearances(args, callback)
```

##### *Example*
```javascript
nyt.congress.members.floorAppearances({‘member-ID’:’<id>’}, console.log)
````</id>})
