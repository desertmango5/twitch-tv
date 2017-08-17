$(document).foundation();

$(document).ready(function() {

	var users = [
		{user: 'freecodecamp', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'esl_sc2', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'ogamingsc2', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'cretetion', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'habathcx', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'robotcaleb', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'noobs2ninjas', stream: '', status: '', url: '', logo: '', display_name: ''},
		{user: 'teaggan', stream: '', status: '', url: '', logo: '', display_name: ''}
	]

	var twitch = {

		getBasicInfo: function(array) {		
			for (var i=0; i < array.length; i++) {
				var user = array[i].user;
				console.log("count: " + i);
				$.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + user + '', function(data) {
					
					console.log(data.name);
				});
			}
			// console.log(users);
		},
		updateBasicInfo: function(url, logo, display_name) {
		  for (var i=0; i < users.length; i++) {
		 		users[i].url = url;
				users[i].logo = logo;
				users[i].display_name = display_name;
				twitch.isLive(display_name, i);
		 	}
		},
		isLive: function(user, index) {		
				$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + user + '', function(data) {
					
					data.stream === null ? twitch.isOffline(index, 'offline', 'Offline') :
					 											 twitch.isOnline(index, 'online', data.stream.channel.status)
				});			
		},
		isOnline: function(user, stream, status) {
			users[user].stream = stream;
			users[user].status = status;
		},
		isOffline: function(user, stream, status) {
			users[user].stream = stream;
			users[user].status = status;
		}
	} // end twitch object

	twitch.getBasicInfo(users);
	// console.log(users);
});






