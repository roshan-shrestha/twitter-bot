// Replies back a tweet.


console.log("This bot replies!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on ('tweet', tweetEvent);

function tweetEvent(eventMsg) {

	// console.log (eventMsg);

	var fs = require('fs');
	var json = JSON.stringify(eventMsg, null, 2);
	fs.writeFile("tweet.json", json);

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;

	if (replyto === 'bot285')
	{
		var newtweet = '@ ' + from + ' this is an automatic reply!';
		tweetIt(newtweet);
		console.log("Message: " + from + " just tweeted you.");
	}		
}

function tweetIt(txt) {

	var r = Math.floor(Math.random()*100);

	var tweet = {
		status:txt
		// place_id: 'ChIJP5iLHkCuEmsRwMwyFmh9AQU'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Something went wrong!");
		}
		else {
			console.log("It worked!");
		}
	}
}

