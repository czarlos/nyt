# Listings sub-API

###Listings Percentiles

##### *Required Params*

- percentile-value
- date-range
- geo-extent-level
- geo-extent-value

##### *Usage*
```javascript
nyt.realEstate.listings.percentile(args, callback)
```

##### *Example*
```javascript
nyt.realEstate.listings.percentile({‘percentile-value’:’50’, ‘date-range’:’2014-07’, ‘geo-extent-level’:’borough’,’geo-extent-value’:’manhatten’}, console.log)
```

###Listings Count

##### *Required Params*

- percentile-value
- date-range
- geo-extent-level
- geo-extent-value

##### *Usage*
```javascript
nyt.realEstate.listings.counts(args, callback)
```

##### *Example*
```javascript
nyt.realEstate.listings.counts({‘percentile-value’:’50’, ‘date-range’:’2014-07’, ‘geo-extent-level’:’borough’,’geo-extent-value’:’manhatten’}, console.log))
```
