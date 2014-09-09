var querystring = require('querystring');
var http = require('http');
var response_lib = require('./response_lib');
var reql = require('./request_lib');

var timestags = require('./timestags');
var newswire = require('./newswire');
var most_popular = require('./most_popular')

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

    var table = {'A':'&', 'Q':'?', 'E':'=', 'S':'/', 'D':'.', 'API_KEY':'api-key', 'V1':'v1',
                        'V2':'v2', 'V3':'v3', 'DEFAULT':'json', 'SVC':'svc'};

    this.article = {
        get : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = checkQuery(args);
            var format = checkField(args['format'], DEFAULT);

            var path = S.concat(SVC, S, 'search', S, V2, S, 'articlesearch',
                                D, format, API_KEY, E, myKeys['article']);
            reql.get(path, callback, args);
        }
    }

    this.bestSellers = {
        get : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var date = response_lib.checkField(args['date'], '');
            var list_name = args['list-name'];
            args = response_lib.removeArgs(['date', 'list-name'], args);
            var query = response_lib.checkQuery(args);

            var path = S.concat(SVC, S, 'books', S, V2, S, 'lists', S,
                               date, S, list_name, S, D, format, query, Q,
                               API_KEY, E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        },
        search : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = S.concat(SVC, C, 'books', S, V2, S, 'lists', D, format, Q,
                               query, API_KEY, E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        },
        history : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = S.concat(SVC, S, 'books', S, V2, S, 'lists', S,
                                'best-sellers', S, 'history', D, format,
                                Q, query, API_KEY, E, myKeys['best-sellers']);
            reql.get(path, callback, args);
        },
        overview : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var query = checkQuery(args);
            var format = response_lib.checkField(args['format'], DEFAULT);
            var path = response_lib.concat(SVC, 'books', S, V2, S, 'lists', S, 'overview',
                                   D, format, Q, query, API_KEY, E,
                                   myKeys['best-sellers']);
            reql.get(path, callback, args);
        },
        names : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = checkField(args['format'], DEFAULT);
            var path = S.concat(SVC, S, 'books', S, V2, 'lists', S, 'names',
                               D, format, Q, API_KEY, E, myKeys[best-sellers]);
            reql.get(path, callback, args);
        }
    }

    this.community = {
        recent : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);

            var path = S.concat(SVC, S, 'community', S, V2, 'comments', S, 'recent',
                               D, format, Q, 'format-replies', E, '0', A,
                               query, A, API_KEY, E, myKeys['community']);
            reql.get(path, callback, args);
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
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);
            var query = response_lib.checkQuery(args);
            var path = S.concat(SVC, S, 'politics', S, V2, 'districts', D, format,
                               Q, API_KEY, E, query, myKeys['districts']);
            reql.get(path, callback, args);
        }
    }

    this.eventListings = {
        search : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = S.concat(SVC, S, 'events', S, V2, S, D, format, Q, query,
                                API_KEY, E, myKeys['event-listings']);

            reql.get(path, callback, args);
        }
    }

    this.geo = {
        search : function (args, callback) {
            var callbackReturn = response_lib.checkCallback(args, callback);
            args = callbackReturn.args;
            callback = callbackReturn.callback;

            var format = response_lib.checkField(args['format'], DEFAULT);
            var query = response_lib.checkQuery(args);

            var path = S.concat(SVC, S, 'semantic', S, V2, 'geocodes', S, 'query',
                               D, format, Q, query, API_KEY, E, myKeys['geo']);
            reql.get(path, callback, args);
        }
    }

    this.mostPopular = {
        emailed : function (args, callback) {
            most_popular.emailed(args, callback, myKeys, table);
        },
        shared : function (args, callback) {
            most_popular.shared(args, callback, myKeys, table);
        },
        viewed : function (args, callback) {
            most_popular.viewed(args, callback, myKeys, table);
        }
    }

    this.newswire = {
        recent : function (args, callback) {
            newswire.recent(args, callback, myKeys, table);
        },
        specific : function (args, callback) {
            newswire.specific(args, callback, myKeys, table);
        }
    }

    this.timestags = {
        search : function (args, callback) {
            timestags.search(args, callback, myKeys, table);
        }
    }
}

module.exports = nyt;
