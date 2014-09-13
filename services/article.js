var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/search/v2/articlesearch';
var keyName = 'article-search';

function article (keys) {
	this.myKeys = keys;
}

article.prototype.search = function (args, callback) {
    var specific = '';
    reql.createRequest(args, callback, this.myKeys, base, specific, keyName);
};

module.exports = article;
