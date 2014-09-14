# Reviews sub-API

###Reviews by Keyword

##### *Required Params*

- N/A

##### *Usage*
```javascript
nyt.movieReviews.byKeyword(args, callback)
```

##### *Example*
```javascript
nyt.movieReviews.byKeyword({}, console.log)
```

###Reviews and NYT Critics’ Picks

##### *Required Params*

- resource-type

##### *Usage*
```javascript
nyt.movieReviews.criticsPicks(args, callback)
```

##### *Example*
```javascript
nyt.movieReviews.criticsPicks({‘resource-type’:’all’}, console.log)
```

###Reviews by Reviewer

##### *Required Params*

- reviewer-name

##### *Usage*
```javascript
nyt.movieReviews.byReviewer(args, callback)
```

##### *Example*
```javascript
nyt.movieReviews.byReviewer({‘reviewer-name’:’manohla-dargis’}, console.log)
```
