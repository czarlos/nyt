var querystring = require('querystring');
var http = require('http');
var utils = require('./utils');

function nyt (keys) {
    var myKeys = keys;
    var A = '&';
    var Q = '?';
    var E = '=';
    var S = '/';
    var D = '.';
    var API_KEY = 'api-key';
    var V1 = 'v1';
    var V2 = 'v2';
    var V3 = 'v3';
    var DEFAULT = 'json';
    var SVC = 'svc';


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

    this.article = {
        get : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = checkQuery(args);
            var format = checkField(args['format'], DEFAULT);

            var path = S.concat(SVC, S, 'search', S, V2, S, 'articlesearch',
                                D, format, API_KEY, E, myKeys['article']);
            get(path, callback, args);
        }
    }

    this.bestSellers = {
        get : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var date = utils.checkField(args['date'], '');
            var list_name = args['list-name'];
            args = utils.removeArgs(['date', 'list-name'], args);
            var query = utils.checkQuery(args);

            var path = S.concat(SVC, S, 'books', S, V2, S, 'lists', S,
                               date, S, list_name, D, format, query, Q,
                               API_KEY, E, myKeys['best-sellers']);
            get(path, callback, args);
        },
        search : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);

            var path = S.concat(SVC, C, 'books', S, V2, S, 'lists', D, format, Q,
                               query, API_KEY, E, myKeys['best-sellers']);
            get(path, callback, args);
        },
        history : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);

            var path = S.concat(SVC, S, 'books', S, V2, S, 'lists', S,
                                'best-sellers', S, 'history', D, format,
                                Q, query, API_KEY, E, myKeys['best-sellers']);
            get(path, callback, args);
        },
        overview : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = checkQuery(args);
            var format = utils.checkField(args['format'], DEFAULT);
            var path = utils.concat(SVC, 'books', S, V2, S, 'lists', S, 'overview',
                                   D, format, Q, query, API_KEY, E,
                                   myKeys['best-sellers']);
            get(path, callback, args);
        },
        names : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = checkField(args['format'], DEFAULT);
            var path = S.concat(SVC, S, 'books', S, V2, 'lists', S, 'names',
                               D, format, Q, API_KEY, E, myKeys[best-sellers]);
            get(path, callback, args);
        }
    }

    this.community = {
        recent : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);

            var path = S.concat(SVC, S, 'community', S, V2, 'comments', S, 'recent',
                               D, format, Q, 'format-replies', E, '0', A,
                               query, A, API_KEY, E, myKeys['community']);
            get(path, callback, args);
        },
        random : function (args, callback) {

        },
        byDate : function (args, callback) {

        },
        byUser : function (args, callback) {

        },
        byURL : function (args, callback) {

        }
    }

    this.districts = {
        search : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);
            var path = S.concat(SVC, S, 'politics', S, V2, 'districts', D, format,
                               Q, API_KEY, E, query, myKeys['districts']);
            get(path, callback, args);
        }
    }

    this.eventListings = {
        search : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);

            var path = S.concat(SVC, S, 'events', S, V2, S, D, format, Q, query,
                                API_KEY, E, myKeys['event-listings']);

            get(path, callback, args);
        }
    }

    this.geo = {
        search : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);

            var path = S.concat(SVC, S, 'semantic', S, V2, 'geocodes', S, 'query',
                               D, format, Q, query, API_KEY, E, myKeys['geo']);
            get(path, callback, args);
        }
    }

    this.mostPopular = {
        emailed : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);
            var section = utils.checkField(args['section'], '');
            var timePeriod = utils.checkField(args['time-period'], '');

            var path = S.concat(SVC, S, 'mostpopular', S, V2, 'mostemailed',
                               S, section, S, timePeriod, D, format, Q, query,
                               API_KEY, E, myKeys['most-popular']);
            get(path, callback, args);
        },
        shared : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);
            var section = utils.checkField(args['section'], '');
            var timePeriod = utils.checkField(args['time-period'], '');

            var path = S.concat(SVC, S, 'mostpopular', S, V2, 'mostshared', S,
                               section, S, timePeriod, D, format, Q, query, API_KEY,
                               E, myKeys['most-popular']);
            get(path, callback, args);
        },
        viewed : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = utils.checkField(args['format'], DEFAULT);
            var query = utils.checkQuery(args);
            var section = utils.checkField(args['section'], '');
            var timePeriod = utils.checkField(args['time-period'], '');

            var path = S.concat(SVC, S, 'mostpopular', S, V2, S, 'mostviewed', S,
                               section, S, timePeriod, D, format, Q, query, API_KEY,
                               E, myKeys['most-popular']);
            get(path, callback, args);
        }
    }

    this.newswire = {
        recent : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var source = utils.checkField(args['source'], '');
            var format = utils.checkField(args['format'], DEFAULT);
            var section = utils.checkField(args['section'], '');
            var timePeriod = utils.checkField(args['time-period'], '');

            var query = utils.checkQuery(args);
            var path = S.concat(SVC,S,'news',S,V3,S,'content',S,source,S,section,
                                S,timePeriod,D,format,Q,
                                query,API_KEY,E,myKeys['newswire']);

            get(path, callback, args);
        },
        specific : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = utils.checkQuery(args);
            var path = S.concat(SVC, S, 'news', S, V3, S, 'content', D,
                                   DEFAULT, Q, query, API_KEY, E, myKeys['newswire']);

            get(path, callback, args);
        }
    }

    this.timesTags = {
        search : function (args, callback) {
            var callbackReturn = utils.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = utils.checkQuery(args);
            var path = S.concat(SVC,S,'suggest',S,V1,S,'timestags',Q,query,API_KEY,E,myKeys['timestags']);
            get(path, callback, args);

        }
    }

}

module.exports = nyt;
