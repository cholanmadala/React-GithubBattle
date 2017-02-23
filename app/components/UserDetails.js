import React from 'react';
var PropTypes = React.PropTypes;

function UserDetails (user) {
	return (
		<div>
			 <h3 className='lead'> {user.header}</h3>
			 {user.score && <li className='list-group-item'>Score: {user.score}</li>}
			 <li className='list-group-item'><img src={user.info.avatar_url}  className='img-rounded img-responsive' /></li>
			 {user.info.name && <li className='list-group-item'>Name: {user.info.name}</li>}
			 <li className='list-group-item'>UserName: {user.info.login}</li>
			 <li className='list-group-item'>Followers: {user.info.followers}</li>
			 <li className='list-group-item'>Following: {user.info.following}</li>
			 <li className='list-group-item'>Public Repos: {user.info.public_repos}</li>
			 {user.info.location && <li className='list-group-item'>Location: {user.info.location}</li>}
			 {user.info.company && <li className='list-group-item'>Company: {user.info.company}</li>}
			 {user.info.blog && <li className='list-group-item'>Blog: <a href='{user.info.blog}' >{user.info.blog}</a></li>}

		</div>
		);
}

UserDetails.PropTypes = {
	score: PropTypes.number,
	header: PropTypes.string.isRequired,
	info: PropTypes.shape({
		avatar_url: PropTypes.string.isRequired,
		blog:PropTypes.string,
		company:PropTypes.string,
		followers:PropTypes.string.isRequired,
		following:PropTypes.string.isRequired,
		public_repos:PropTypes.number.isRequired,
		location:PropTypes.string,
		login:PropTypes.string.isRequired,
		name:PropTypes.string
	})
}

export default UserDetails;