// Loads tweets with a certain query 'q'

console.log("This bot is starting now!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'matthews',
	count: 2
	
}

T.get('search/tweets', params, gotData);

//setInterval(T.get, 1000 * 2);


function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text)
	}
};
