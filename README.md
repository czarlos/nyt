New York Times API Wrapper
==========================
A New York Times API wrapper for Node.js

### Motivation
I wasn't able to find a wrapper for the New York Times
developer API, and I thought it would be great if one existed,
thus, I wrote this one.

### Setting Things Up

Installing things up is fairly simple:

```
npm install -s nyt
```

this will install the module and save it in `package.json`. 


```javascript
var NYT = require('nyt');
```

###Accessing the Endpoint

Before making API calls we have to add the developer keys.
To do this create a JSON object with keys for each of the New 
York Times APIs that you wish to access. Thus each key is paired
with its name as seen in this next snippet:

```javascript
var keys = {
            'article-search':'sample-key',
            'congress':'sample-key'
            }
```

These keys are to be passed through the constructor for the New
York Times API wrapper.

```javascript
var nyt = new NYT(keys);
```

You are now ready to start making calls.
Calls are made via the specific API and the sub-API that we wish
to access. Therefore calls are structured as such:

```javascript
nyt.api.(sub-api).function(args, callback)
```
Some of the API's have sub-APIs, and some don't.
Here is an example of accessing an API that *doesn't* have a
sub-API:

```javascript
nyt.article.get({'query':'bill gates'}, console.log); 
```

Here's an example of accessing an API that *has* a sub-API:

```javascript
nyt.congress.members.newMembers({}, console.log);
```

In the previous example, 'congress' is the API, 'members'
is the sub-API, and 'newMembers()' is the method call. The API
structure follows the New York Times documentation, and is outlined
further in the 'Structure' section of this document.

---

Please refer to the docs pages for in-depth API outlines.

### Structure

Below is the structure of the API and sub-APIs. Official documentation
for this structure can be found in the 
[New York Times API](http://developer.nytimes.com/io-docs).

- Article
- Best Sellers
- Campaign Finance
  - Candidates
  - Committees
  - Presidential Campaigns
  - Electronic Filings
  - Electioneering Communications
  - Individual Contributions
  - Independent Expenditures
  - Late Contributions to Candidates
  - Lobbyist Bundlers
- Community
- Congress
  - Members
  - Votes
  - Bills
  - Nominees
  - Other
- Districts
- Event Listings
- Geo
- Most Popular
- Movie Reviews
  - Reviews
  - Critics
- Real Estate
  - Listings
  - Sales
- Semantic
- Newswire
- Timestags

### Contributing

If you encounter any bugs, or wish to improve upon the API, please feel
free to issue a pull request.

### Author

This project was written and is maintained by Carlos Reyes. Find me on
twitter [@theCzarlos](https://twitter.com/theczarlos).

