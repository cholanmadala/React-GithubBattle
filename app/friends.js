import React from 'react';
import ReactDOM from 'react-dom';


class Friends extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div> These are my friends
				<ol>
					{this.props.friendsList.map((item, i) => <li key={i}> {item} and their serial is {i}. </li>) }
				</ol>
			</div>
		)
	}

}
export default Friends;
