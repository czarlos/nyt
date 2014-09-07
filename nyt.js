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

    function Base() {
        this.ant = "ant";
    }

    this.best_sellers = function (args, which, prequery, callback) {
		if (which === 'get' && (typeof prequery.date === 'undefined' || typeof prequery.list_name === 'undefined')) {
			throw new Error('Date and list name required to get bestsellers');
		}

		var sub_api = {'get':'lists/' + prequery.date + '/' + prequery.list_name + '.json',
		'search':'lists.json',
		'history':'lists/best-sellers/history.json',
		'overview':'lists/overview.json',
		'names':'lists/names.json'}

		if (!callback) {
            callback = args;
            args = undefined;
        }
        var version = 'v2/';
        var path = '/svc/books/' + version + sub_api[which] + '?' + querystring.stringify(args) + '&' + 'api-key=' + keys.best_sellers;
        this.get(path, callback, args);
    }

    this.article = {
        get : function (args, callback) {
            if(!callback) {
                callback = args;
                args = undefined;
            }
            var path = '/svc/search/v2/articlesearch.json' +
                '?' + querystring.stringify(args) +
                '&' + 'api-key=' + myKeys['article'];
            get(path, callback, args);
        }
    }

    this.bestSellers = {
        get : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var books = '/svc/books/';
            var date = "";
            if (typeof args.date != undefined) {
                date = args.date;
            }
            var list_name = args['list-name'];
            var args = utils.removeArgs(['date', 'list-name'], args);
            var path = books + version + 'lists/' +
                date + '/' + list_name +
                '.json' + querystring.stringify(args) + '?' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        },
        search : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var path = '/svc/books/' + version + 'lists' + format + '?' + querystring.stringify(args) + '&' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        },
        history : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var path = '/svc/books/' + version + 'lists/best-sellers/history' + format + '?' + querystring.stringify(args) + '&' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        },
        overview : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var path = '/svc/books/' + version + 'lists/overview' + format + '?' + querystring.stringify(args) + '&' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        },
        names : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var path = '/svc/books/' + version + 'lists/names' + format + '?' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        }
    }

    this.community = {
        recent : function (args, callback) {
            if(!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var path = '/svc/community/' + version + 'comments/recent' + format + '?force-replies=0' + '&' + querystring.stringify(args) + '&api-key=' + myKeys['community'];
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
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args) != '') {
                query = querystring.stringify(args) + '&';
            }
            var path = '/svc/politics/' + version + 'districts' + format + '?' + 'api-key=' + query + myKeys['districts'];
            get(path, callback, args);
        }
    }

    this.eventListings = {
        search : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args)) {
                query = querystring.stringify(args) + '&';
            }
            var path = '/svc/events/' + version + 'listings' + format + '?' + query + 'api-key=' + myKeys['event-listings'];

            get(path, callback, args);
        }
    }

    this.geo = {
        search : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args)) {
                query = querystring.stringify(args) + '&';
            }
            var path = '/svc/semantic/' + version + 'geocodes/query' + format + '?' + query + 'api-key=' + myKeys['geo'];
            get(path, callback, args);
        }
    }

    this.mostPopular = {
        emailed : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args)) {
                query = querystring.stringify(args) + '&';
            }
            var section = args.section;
            var timePeriod = args['time-period'];
            var path = '/svc/mostpopular/' + version + 'mostemailed/' + section +
                '/' + timePeriod + format + '?' + query + 'api-key='+ myKeys['most-popular'];
            get(path, callback, args);
        },
        shared : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args)) {
                query = querystring.stringify(args) + '&';
            }
            var section = args.section;
            var timePeriod = args['time-period'];
            var path = '/svc/mostpopular/' + version + 'mostshared/' + section +
                '/' + timePeriod + format + '?' + query + 'api-key=' + myKeys['most-popular'];
            get(path, callback, args);
        },
        viewed : function (args, callback) {
            if (! callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var format = '.json';
            var query = '';
            if (querystring.stringify(args)) {
                query = querystring.stringify(args) + '&';
            }
            var section = args.section;
            var timePeriod = args['time-period'];
            var path = '/svc/mostpopular/' + version + 'mostviewed/' + section +
                '/' + timePeriod + format + '?' + query + 'api-key=' + myKeys['most-popular'];
            get(path, callback, args);
        }
    }

    this.newswire = {
        recent : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var source = utils.checkField(args['source'], '');
            var format = utils.checkField(args['format'], DEFAULT);
            var section = utils.checkField(args['section'], '');
            var timePeriod = utils.checkField(args['time-period'], '');

            var query = utils.checkQuery(args);
            var path = S.concat(SVC,S,'news',S,V3,S,'content',S,source,S,section,S,timePeriod,D,format,Q,
                               query,API_KEY,E,myKeys['newswire']);

            get(path, callback, args);
        },
        specific : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var query = utils.checkQuery(args);
            var path = S.concat(SVC, S, 'news', S, V3, S, 'content', D,
                                   DEFAULT, Q, query, API_KEY, E, myKeys['newswire']);

            get(path, callback, args);
        }
    }

    this.timesTags = {
        search : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var query = utils.checkQuery(args);
            var path = S.concat(SVC,S,'suggest',S,V1,S,'timestags',Q,query,API_KEY,E,myKeys['timestags']);
            get(path, callback, args);

        }
    }

}

module.exports = nyt;
