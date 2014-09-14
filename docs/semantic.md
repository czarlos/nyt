# Semantic API

###Name

##### *Required Params*

- concept-type
- specific-concept

##### *Usage*
```javascript
nyt.semantic.name(args, callback)
```

##### *Example*
```javascript
nyt.semantic.name({‘concept-type’:’nytd_geo’, ‘specific-concept’:’science’}, console.log)
```

###URI

##### *Required Params*

- concept-uri

##### *Usage*
```javascript
nyt.semantic.uri(args, callback)
```

##### *Example*
```javascript
nyt.semantic.uri({‘concept-uri’:’<uri>’}, console.log)
```

###Article

##### *Required Params*

- article-uri

##### *Usage*
```javascript
nyt.semantic.article(args, callback)
```

##### *Example*
```javascript
nyt.semantic.article({‘article-uri’:’<uri>’}, console.log)
```

###Search

##### *Required Params*

- query

##### *Usage*
```javascript
nyt.semantic.search(args, callback)
```

##### *Example*
```javascript
nyt.semantic.search({‘query’:’bill gates’}, console.log)
````
