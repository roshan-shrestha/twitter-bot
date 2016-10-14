// Tweets a random number

console.log("This bot is starting now!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


tweetIt();
setInterval(tweetIt, 1000 * 30);

function tweetIt() {
	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'Generating a random number: ' + r + ' #bottweet'
	}

	T.post('statuses/update', tweet, tweeted);
console.log("check");
	function tweeted(err, data, response){
		if (err) {
			console.log("Something's wrong.");
		} else {
			console.log("It worked.");
		}
	} 
};
