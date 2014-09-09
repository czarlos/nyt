var http = require('http');

var request = function (path, data, callback, args) {
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

var get = function (path, callback, args) {
	request(path, undefined, callback, args);
}

exports.get = get;