$(document).foundation();

$(document).ready(function() {

	const users = ['freecodecamp', 'esl_sc2', 'ogamingsc2', 'cretetion', 'habathcx', 'robotcaleb', 'noobs2ninjas', 'teaggan']
	
	const twitch = {
		getUsersInfo: function() {
			users.forEach(function(userName) {
				twitch.makeURL('channels', userName);
			});
		},
		makeURL: function(type, userName) {
			const url = `https://wind-bow.glitch.me/twitch-api/${type}/${userName}`;
			return url;
		},
		getInfo: function(url) {
			$.getJSON(    , function(data) {
				console.log(data.display_name);
			});
		}
	}  // end twitch object	




twitch.getUsersInfo();

});  // end jQuery document



// get display_name, user twitch url, logo url 
// https://wind-bow.glitch.me/twitch-api/channels/[user]

// determine if user is online/offline and user status if online
// https://wind-bow.glitch.me/twitch-api/streams/[user]

