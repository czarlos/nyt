var querystring = require('querystring');
var http = require('http');

function nyt (keys) {
	this.request = function (path, data, callback, args) {
		var options = {
			hostname: 'api.nytimes.com',
			path: path
		}
		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			var buffer = '';
			res.on('data', function(chunk) {
				buffer += chunk;
			});
			res.on('end', function() {
				callback(buffer);
			});
		});

		req.on('error', function(err) {
			callback(err);
		});

		req.end();
	}

	this.get = function (path, callback, args) {
		this.request(path, undefined, callback, args);
	}

	this.article = function (args, callback) {
		if (!callback) {
			callback = args;
			args = undefined;
		}
        var path = '/svc/search/v2/articlesearch.json' + '?' + querystring.stringify(args) + '&' + 'api-key=' + keys.article;
		this.get(path, callback, args);
	}

    this.best_sellers = function (args, which, prequery, callback) {
		if (which === 'get' && (typeof prequery.date === 'undefined' || typeof prequery.list_name === 'undefined')) {
			throw new Error('Date and list name required to get bestsellers');
		}

		var sub_api = {'get':'lists/' + prequery.date + '/' + prequery.list_name + '.json', 
		'search':'lists.json', 
		'history':'lists/best-sellers/history.json', 
		'overview':'lists/overview.json', 
		'names':'lists/name.json'}
        
		if (!callback) {
            callback = args;
            args = undefined;
        }
        var version = 'v2/';
        var path = '/svc/books/' + version + sub_api[which] + '?' + querystring.stringify(args) + '&' + 'api-key=' + keys.best_sellers;
        this.get(path, callback, args);
    }
}

module.exports = nyt;
