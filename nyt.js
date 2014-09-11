var timestags = require('./services/timestags');
var newswire = require('./services/newswire');
var most_popular = require('./services/most_popular');
var movie_reviews = require('./services/movie_reviews');
var geo = require('./services/geo');
var event_listings = require('./services/event_listings');
var districts = require('./services/districts');
var community = require('./services/community');
var best_sellers = require('./services/best_sellers');
var article = require('./services/article');
var semantic = require('./services/semantic');
var real_estate = require('./services/real_estate');
var congress = require('./services/congress');


function nyt (keys) {
    var myKeys = keys;

    this.article = new article (myKeys);

    this.congress = new congress (myKeys);

    this.bestSellers = new best_sellers (myKeys);

    this.community = new community (myKeys);

    this.districts = new districts (myKeys);

    this.eventListings = new event_listings (myKeys);

    this.geo = new geo (myKeys);

    this.mostPopular = new most_popular (myKeys);

    this.movieReviews = new movie_reviews (myKeys);

    this.newswire = new newswire (myKeys);

    this.realEstate = new real_estate (myKeys);

    this.semantic = new semantic (myKeys);

    this.timestags = new timestags (myKeys);
}

module.exports = nyt;