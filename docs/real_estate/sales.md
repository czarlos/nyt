# Sales sub-API

###Sales Percentiles

##### *Required Params*

- percentile-value
- date-range
- geo-extent-level
- geo-extent-value

##### *Usage*
```javascript
nyt.realEstate.sales.percentile(args, callback)
```

##### *Example*
```javascript
nyt.realEstate.sales.percentile({‘percentile-value’:’50’, ‘date-range’:’2014-07’, ‘geo-extent-level’:’borough’,’geo-extent-value’:’manhatten’}, console.log)
```

###Sales Count

##### *Required Params*

- percentile-value
- date-range
- geo-extent-level
- geo-extent-value

##### *Usage*
```javascript
nyt.realEstate.sales.counts(args, callback)
```

##### *Example*
```javascript
nyt.realEstate.sales.counts({‘percentile-value’:’50’, ‘date-range’:’2014-07’, ‘geo-extent-level’:’borough’,’geo-extent-value’:’manhatten’}, console.log))
```
