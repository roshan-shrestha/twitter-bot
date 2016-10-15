// Loads tweets with a certain query 'q'

console.log("This bot is starting now!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'hillary', 
	count: 2
	
}

T.get('search/tweets', params, gotData);
//sleep(2);
//T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text)
	}
};
