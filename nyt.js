var querystring = require('querystring');
var http = require('http');

var nyt = function(key) {

	var request = function (path, data, callback, args) {
		var options = {
			hostname: 'www.api.nytimes.com/',
			path: path
		}

		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			var buffer = '';
			res.on('data', function(chunk) {
				buffer += chunk;
			});

			res.on('end', function() {
				try {
					var json = JSON.parse(buffer);
				} catch (err) {
					return callback(err);
				}
				callback(null, json);
			});
		});

		req.on('error', function(err) {
			callback(err);
		});

		req.on('socket', function (socket) {
			socket.setTimeout(5000);
			socket.on('timeout', function() {
				req.abort();
			});
			socket.on('error', function(err) {
				callback(err);
			});
		});
		console.log(data);
		req.end(data);
	}

	var get = function (api_path, callback, args) {
		var path = '/svc/' + api_path + '/?' + querystring.stringify(args);
		console.log(path);
		this.request(path, undefined, callback, args);
	}

	var article = function (args, callback) {
		var api_path = 'svc/search/v2/articlesearch';
		if (!callback) {
			callback = args;
			args = undefined;
		}
		this.get(api_path, callback, args);
	}
}

module.exports = nyt;
