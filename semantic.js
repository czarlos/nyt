var response_lib = require('./response_lib');
var reql = require('./request_lib');

var name = function (args, callback, myKeys, t) {
    var callbackReturn =response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['field'], t.DEFAULT);
    var concept_type = response_lib.checkField(args['concept-type'], 'nytd_geo');
    var specific_concept = response_lib.checkField(args['specific-concept'], '');
    response_lib.removeArgs(['specific-concept'], args);
    var query = response_lib.checkQuery(args);

    var path = (t.S).concat(t.SVC, t.S, 'semantic', t.S, t.V2, t.S,
                           'concept', t.S, 'name', t.S, concept_type, t.S, specific_concept, t.D,
                           format, t.Q, query, t.API_KEY, t.E, myKeys['semantic']);
    reql.get(path, callback, args);
}

var uri = function (args, callback, myKeys, t) {
    var callbackReturn =response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['field'], t.DEFAULT);
    var concept_uri = response_lib.checkField(args['concept-uri'], '');

    response_lib.removeArgs(['concept-uri'], args);
    var query = response_lib.checkQuery(args);

    var path = (t.S).concat(t.SVC, t.S, 'semantic', t.S, t.V2, t.S,
                           'concept', t.S, 'uri', t.S, concept_uri, t.D, format, t.Q,
                           query, t.API_KEY, t.E, myKeys['semantic']);

    console.log(path);
    reql.get(path, callback, args);
}

var article = function (args, callback, myKeys, t) {
    var callbackReturn =response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['field'], t.DEFAULT);
    var article_uri = response_lib.checkField(args['article-uri'], '');

    response_lib.removeArgs(['article-uri'], args);
    var query = response_lib.checkQuery(args);

    var path = (t.S).concat(t.SVC, t.S, 'semantic', t.S, t.V2, t.S,
                           'concept', t.S, 'article', t.S, article_uri, t.D, format, t.Q,
                           query, t.API_KEY, t.E, myKeys['semantic']);
    reql.get(path, callback, args);
}

var search = function (args, callback, myKeys, t) {
    var callbackReturn =response_lib.checkCallback(args, callback);
    args = callbackReturn.args;
    callback = callbackReturn.callback;

    var format = response_lib.checkField(args['field'], t.DEFAULT);
    var query = response_lib.checkQuery(args);
    var path = (t.S).concat(t.SVC, t.S, 'semantic', t.S, t.V2, t.S,
                           'concept', t.S, 'search', t.D, format, t.Q,
                           query, t.API_KEY, t.E, myKeys['semantic']);

    console.log(path);
    reql.get(path, callback, args);
}

exports.name = name;
exports.uri = uri;
exports.article = article;
exports.search = search;
