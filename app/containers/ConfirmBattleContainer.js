import React from 'react';
import Confirm from '../components/Confirm';
import helpers from '../utils/gitHubHelpers';

class ConfirmBattleContainer extends React.Component {
	constructor () {
		super();
		this.state = {
			isLoading : true,
			playersInfo : []
		};
		this.handleInitiateBattle=this.handleInitiateBattle.bind(this);
	}
	componentDidMount () {
		let query = this.props.location.query;
		let that = this;
		//Fetch data from GitHub and update the state
		helpers.gerPlayersInfo([query.playerOne, query.playerTwo]).then(function (players){
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
		}.bind(this));

	}
	handleInitiateBattle () {
		console.log('handleInitiateBattle');
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	}
	render () {
		return (
			<Confirm
				isLoading={this.state.isLoading}
				onInitiateBattle = {this.handleInitiateBattle}
				playersInfo={this.state.playersInfo}
			/>
			)
	}

};

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

module.exports = ConfirmBattleContainer;
// export default ConfirmBattleContainer;