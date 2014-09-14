# Bills sub-API

###Recent Bills

##### *Required Params*

- chamber
- congress-number
- type

##### *Usage*
```javascript
nyt.congress.bills.recent(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.recent({‘type’:’introduced’, 
‘chamber’:’house’, ‘congress-number’:’105’, ‘type’:’introduced’}, console.log)
```

###Bills by Member

##### *Required Params*

- member-ID
- type

##### *Usage*
```javascript
nyt.congress.bills.byMember(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.byMember({‘congress-number’:’105’, 
‘member-ID’:’<id>’, ‘type’:’introduced’}, console.log)
```

###Bills Details

##### *Required Params*

- congress-number
- bill-ID

##### *Usage*
```javascript
nyt.congress.bills.details(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.details({‘congress-number’:’105’, 
‘bill-ID’:’<id>’}, console.log)
```

###Bills Subjects, Amendments and Recent Bills

##### *Required Params*

- congress-number
- bill-ID
- resource

##### *Usage*
```javascript
nyt.congress.bills.subjects(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.subjects({‘congress-number’:’105’, 
‘bill-ID’:’<id>’, ‘resource’:’subjects’}, console.log)
```

###Bills Cosponsors

##### *Required Params*

- congress-number
- bill-ID

##### *Usage*
```javascript
nyt.congress.bills.cosponsors(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.cosponsors({‘congress-number’:’105’, 
‘bill-ID’:’<id>’}, console.log)
````</id>})
