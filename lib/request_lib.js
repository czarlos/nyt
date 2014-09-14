var http = require('http');
var response_lib = require('./response_lib');

var constants = {'A':'&', 'Q':'?', 'E':'=', 'S':'/', 'D':'.', 'API_KEY':'api-key', 'V1':'v1',
			'V2':'v2', 'V3':'v3', 'DEFAULT':'json', 'SVC':'svc'};

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

var buildPath = function(params) {
	var path = '';
	for (var i = 0; i < arguments.length; i++) {
        if(arguments[i]) {
    	    path += '/' + arguments[i];
        }
  	}
  	return path;
}

var createRequest = function (args, callback, myKeys, base, specific, keyName) {
    if (!callback) {
        callback = args;
        args = undefined;
    }

    var key = myKeys[keyName];
    var format = response_lib.checkField(args['format'], constants.DEFAULT);
    var query = response_lib.checkQuery(args);

    var path = base.concat(specific, constants.D, format, constants.Q, query, constants.API_KEY,
				constants.E, key);
    get(path, callback, args);
}

exports.get = get;
exports.createRequest = createRequest;
exports.buildPath = buildPath;
