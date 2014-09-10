var querystring = require('querystring');
var http = require('http');
var response_lib = require('./response_lib');
var reql = require('./request_lib');

var timestags = require('./timestags');
var newswire = require('./newswire');
var most_popular = require('./most_popular');
var geo = require('./geo');
var event_listings = require('./event_listings');
var districts = require('./districts');
var community = require('./community');
var best_sellers = require('./best_sellers');
var article = require('./article');
var semantic = require('./semantic');

function nyt (keys) {
    var myKeys = keys;

    var table = {'A':'&', 'Q':'?', 'E':'=', 'S':'/', 'D':'.', 'API_KEY':'api-key', 'V1':'v1',
                        'V2':'v2', 'V3':'v3', 'DEFAULT':'json', 'SVC':'svc'};

    this.article = {
        get : function (args, callback) {
            article.get(args, callback, myKeys);
        }
    }

    this.bestSellers = {
        get : function (args, callback) {
            best_sellers.get(args, callback, myKeys);
        },
        search : function (args, callback) {
            best_sellers.search(args, callback, myKeys);
        },
        history : function (args, callback) {
            best_sellers.history(args, callback, myKeys);
        },
        overview : function (args, callback) {
            best_sellers.overview(args, callback, myKeys);
        },
        names : function (args, callback) {
            best_sellers.names(args, callback, myKeys);
        }
    }

    this.community = {
        recent : function (args, callback) {
            community.recent(args, callback, myKeys);
        },
        random : function (args, callback) {
            community.random(args, callback, myKeys);
        },
        byDate : function (args, callback) {
            community.byDate(args, callback, myKeys);
        },
        byUser : function (args, callback) {
            community.byUser(args, callback, myKeys);
        },
        byURL : function (args, callback) {
            community.byURL(args, callback, myKeys);
        }
    }

    this.districts = {
        search : function (args, callback) {
            districts.search(args, callback, myKeys, table);
        }
    }

    this.eventListings = {
        search : function (args, callback) {
            event_listings.search(args, callback, myKeys, table);
        }
    }

    this.geo = {
        search : function (args, callback) {
            geo.search(args, callback, myKeys, table);
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

    this.semantic = {
        name : function (args, callback) {
            semantic.name (args, callback, myKeys, table);
        },
        uri : function (args, callback) {
            semantic.uri (args, callback, myKeys, table);
        },
        article : function (args, callback) {
            semantic.article (args, callback, myKeys, table);
        },
        search : function (args, callback) {
            semantic.search (args, callback, myKeys, table);
        }
    }

    this.timestags = {
        search : function (args, callback) {
            timestags.search(args, callback, myKeys, table);
        }
    }
}

module.exports = nyt;
