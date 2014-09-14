var timestags = require('./services/timestags');
var newswire = require('./services/newswire');
var most_popular = require('./services/most_popular');
var geo = require('./services/geo');
var event_listings = require('./services/event_listings');
var districts = require('./services/districts');
var community = require('./services/community');
var best_sellers = require('./services/best_sellers');
var article = require('./services/article');
var semantic = require('./services/semantic');

/* Congress */
var bills = require('./services/congress/bills');
var members = require('./services/congress/members');
var nominees = require('./services/congress/nominees');
var other = require('./services/congress/other');
var votes = require('./services/congress/votes');

/* Movie Reviews */
var reviews = require('./services/movie_reviews/reviews');
var critics = require('./services/movie_reviews/critics');

/* Real Estate */
var listings = require('./services/real_estate/listings');
var sales = require('./services/real_estate/sales');


function nyt (keys) {
    var myKeys = keys;

    this.article = new article (myKeys);

    this.congress = {
        bills : new bills (myKeys),
        members : new members (myKeys),
        nominees : new nominees (myKeys),
        other : new other (myKeys),
        votes : new votes (myKeys)
    };

    this.bestSellers = new best_sellers (myKeys);

    this.community = new community (myKeys);

    this.districts = new districts (myKeys);

    this.eventListings = new event_listings (myKeys);

    this.geo = new geo (myKeys);

    this.mostPopular = new most_popular (myKeys);

    this.movieReviews = {
        reviews : new reviews (myKeys),
        critics : new critics (myKeys)
    }

    this.newswire = new newswire (myKeys);

    this.realEstate = {
        listings : new listings (myKeys),
        sales : new sales (myKeys)
    }

    this.semantic = new semantic (myKeys);

    this.timestags = new timestags (myKeys);
}

module.exports = nyt;
