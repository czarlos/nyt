'use strict';
var examples = (function(){
	var nyt = require('./nyt');
	var bestsellerKey = 'MYKEY'; 
	
	var hardcovers = function(){
		var hardcover = 'Hardcover Fiction';
		var bargs = {'list-name':hardcover};
		var keys = {"best-sellers":bestsellerKey};
		var ossek_nyt = new nyt(keys);
		ossek_nyt.bestSellers.get(bargs,console.log);
	};

        var hardcoversOnDate = function(){
		var hardcover = 'Hardcover Fiction';
		var date = '2011-02-13';
		var bargs = {'list-name':hardcover,'YYYY-MM-DD':date};
		var keys = {"best-sellers":bestsellerKey};
		var ossek_nyt = new nyt(keys);
		ossek_nyt.bestSellers.get(bargs,console.log);
	};

	return {
		hardcovers: hardcovers,
		hardcoversOnDate: hardcoversOnDate
	};
})();

examples.hardcoversOnDate();

