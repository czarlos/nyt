# Nominees sub-API

###Nominees Lists

##### *Required Params*

- congress-number
- nomination-category

##### *Usage*
```javascript
nyt.congress.bills.lists(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.lists({‘congress-number’:’107’, 
‘nomination-category’:’received’}, console.log)
```

###Nominees Details

##### *Required Params*

- congress-number
- nomination-ID

##### *Usage*
```javascript
nyt.congress.bills.details(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.details({‘congress-number’:’107’, 
‘nomination-ID’:’<id>’}, console.log)
```

###Nominees by State

##### *Required Params*

- congress-number
- ST

##### *Usage*
```javascript
nyt.congress.bills.byState(args, callback)
```

##### *Example*
```javascript
nyt.congress.bills.byState({‘congress-number’:’107’, 
‘ST’:’MA’}, console.log)
````
