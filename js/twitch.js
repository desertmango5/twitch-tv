$(document).foundation();

$(document).ready(function() {

	const users = [
		'freecodecamp',
		'esl_sc2',
		'ogamingsc2',
		'cretetion',
		'habathcx',
		'robotcaleb',
		'noobs2ninjas',
		'teaggan'	]

	const twitch = {
		allUsers: function(index) {
			index.forEach(function(user) {
				twitch.getUserInfo(user);
			});
		},
		getUserInfo: function(user) {
			$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + user + '?callback=?', function(data) {
					var status;
					var onlineClass;

					data.stream === null ? status = 'Offline' : status = data.stream.channel.status
					data.stream === null ? onlineClass = 'offline' : onlineClass = 'online'
			
				$.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + user + '?callback=?', function(data) {

					var logo = data.logo;
					var userName = data.display_name;
					var url = data.url;

					$(`<div class="${onlineClass} grid-x grid-padding-x grid-margin-x align-middle align-spaced">
						<div class="logo cell text-center small-12 large-shrink"><img src="${logo}"></div>
						<div class="userName cell small-12 large-2 text-center"><a href="${url}" target="_blank">${userName}</a></div>
						<div class="stream cell small-12 large-6 large-offset-1 text-center">${status}</div>
						</div>`).appendTo("#user-info");
				});
			});
		}
	}
	twitch.allUsers(users);
});






