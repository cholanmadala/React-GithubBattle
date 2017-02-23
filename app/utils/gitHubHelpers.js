var axios = require('axios');
let id = 'YOUR_CLIENT_ID';
let sec = 'YOUR_SECRET_ID';
let param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
	//fetch usernames repos
	return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars (repos) {
	//calculate all the stars that the user has
	return repos.data.reduce(function (prev, current){
		return prev + current.stargazers_count
	}, 0);
}

function getPlayersData (player) {
	//get repos
	//get stars
	//return object with that data
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function (totalStars) {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
}


function calculateScores (players) {
	//return an array of scores after calculating them using some fancy algorithm to find the winner
	return [
		players[0].followers * 3 * players[0].totalStars,
		players[1].followers * 3 * players[1].totalStars,
	]
}

var helpers = {
	gerPlayersInfo : function (players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username);
		})).then (function (info) {
			return info.map(function (user) {
				return user.data;
			})
		}).catch (function (err) {
			console.warn('Error in getPlayersInfo', err);
		})
	},
	battle : function (players) {
		let playerOneData = getPlayersData(players[0]);
		let playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch(function (err) {console.warn(`Some error in the gerPlayersInfo: ${err}`)})
	}
}

export default helpers;