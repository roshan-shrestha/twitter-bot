console.log("This bot is starting now!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

// Tweet when someone follows me
function followed(eventMsg) {
	console.log("Follow event!");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + ' thank you for following me. Do you like unicorns?');
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

