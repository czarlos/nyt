# Community API

###Recent Comments

##### *Required Params*

- force-replies

##### *Usage*
```javascript
nyt.community.recent(args, callback)
```

##### *Example*
```javascript
nyt.community.recent({‘force-replies’:’0’}, console.log)
```

###Random Comments

##### *Required Params*

##### *Usage*
```javascript
nyt.community.random(args, callback)
```

##### *Example*
```javascript
nyt.community.random({}, console.log)
```

###Comments by Date

##### *Required Params*

- YYYYMMDD

##### *Usage*
```javascript
nyt.community.byDate(args, callback)
```

##### *Example*
```javascript
nyt.community.byDate({‘YYYYMMDD’:’20120107’}, console.log)
```

###Comments by User ID

##### *Required Params*

- user-ID

##### *Usage*
```javascript
nyt.community.byUser(args, callback)
```

##### *Example*
```javascript
nyt.community.byUser({‘user-ID’:’<id>’}, console.log)
```

###Comments by URL

##### *Required Params*

- url-to-match

##### *Usage*
```javascript
nyt.community.byURL(args, callback)
```

##### *Example*
```javascript
nyt.community.byURL({‘url-to-match’:’<url>’}, console.log)
````</url>})
