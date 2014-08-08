var querystring = require('querystring');
var http = require('http');

function nyt (key) {

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
				//var response_json = JSON.parse(buffer);
				//console.log(buffer);
			});
		});

		req.on('error', function(err) {
			callback(err);
		});

		req.end();
	}

	this.get = function (api_path, callback, args) {
		var path = api_path + '?' + querystring.stringify(args) + '&' + 'api-key=' + key;
		//console.log(path);
		this.request(path, undefined, callback, args);
	}

	this.article = function (args, callback) {
		var api_path = '/svc/search/v2/articlesearch.json';
		if (!callback) {
			callback = args;
			args = undefined;
		}
		this.get(api_path, callback, args);
	}
}

module.exports = nyt;
