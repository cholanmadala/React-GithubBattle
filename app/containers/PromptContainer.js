import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			username: ''
		};
		this.handleSubmitUser = this.handleSubmitUser.bind(this);
		this.handleChangeUser = this.handleChangeUser.bind(this);
	}

	handleSubmitUser(e) {
		console.log(e);
		e.preventDefault();
		let username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			console.log('go to Battle route');
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			//go to playerTwo route
			this.context.router.push('/playerTwo/' + this.state.username);
		}

	}
	handleChangeUser(e) {
		this.setState({
			username: e.target.value
		});
	}
	render() {
		return (
			<Prompt
				header={this.props.route.header}
				onChangeUser={this.handleChangeUser}
				onSubmitUser={this.handleSubmitUser}
				username={this.state.username}
			/>
		);
	}
};

PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

module.exports = PromptContainer;

// export default PromptContainer;
