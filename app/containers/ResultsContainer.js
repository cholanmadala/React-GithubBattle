import React from 'react';
import Results from '../components/Results';
import helpers from '../utils/gitHubHelpers';

class ResultsContainer extends React.Component {
	constructor () {
		super();
		this.state={
			isLoading: true,
			scores:[]
		}

	}

	componentDidMount () {
		let playersData = this.props.location.state.playersInfo;
		helpers.battle(playersData)
			.then(function (scores){
				this.setState({
					scores:scores,
					isLoading:false
				})
			}.bind(this));
	}

	render () {
		return (
			<Results
				isLoading={this.state.isLoading}
				playersInfo={this.props.location.state.playersInfo}
				scores={this.state.scores}/>
			)
	}

};

module.exports = ResultsContainer;