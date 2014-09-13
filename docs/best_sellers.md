# Best Sellers API
###Get Best Seller List

##### *Required Params*

- list-name

##### *Usage*
```javascript
nyt.bestSellers.get(args, callback)
```

##### *Example*
```javascript
nyt.routes.get({‘list-name’:’hardcover-fiction’}, console.log)
```

###Search Best Seller Lists

##### *Required Params*

- list-name

##### *Usage*
```javascript
nyt.bestSellers.search(args, callback)
```

##### *Example*
```javascript
nyt.routes.search({‘list-name’:’hardcover-fiction’}, console.log)
```

###Best Seller History

##### *Required Params*

- age-group ||
author ||
contributor ||
isbn ||
price ||
publisher ||
title

##### *Usage*
```javascript
nyt.bestSellers.get(args, callback)
```

##### *Example*
```javascript
nyt.routes.history({‘author’:’rowling’}, console.log)
```

###Lists Overview

##### *Required Params*

- N/A

##### *Usage*
```javascript
nyt.bestSellers.overview(args, callback)
```

##### *Example*
```javascript
nyt.routes.overview({}, console.log)
```

###List Names

##### *Required Params*

- N/A

##### *Usage*
```javascript
nyt.bestSellers.names(args, callback)
```

##### *Example*
```javascript
nyt.routes.search({}, console.log)
```
