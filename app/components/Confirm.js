import React from 'react';
import styles from '../styles';
import Loading from './Loading';
var ReactRouter = require('react-router');
import UserDetails from './UserDetails';
var Link = ReactRouter.Link;

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

class Confirm extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
				this.props.isLoading ?
				 <Loading text={'Getting Data'} />
				 :  <div className= 'jumbotron col-sm-12 text-center' style={styles.transparentBg}>
				 		<h1>Confirm Players</h1>
				 		<div className='col-sm-8 col-sm-offset-2'>
				 			<div className='col-sm-6'>
					 				<UserDetails header={'Player One'}  info={this.props.playersInfo[0]}/>
				 			</div>
				 			<div className='col-sm-6'>
					 				<UserDetails header={'Player Two'}  info={this.props.playersInfo[1]}/>
				 			</div>
				 		</div>
				 		<div className='col-sm-8 col-sm-offset-2'>
				 			<div className='col-sm-12' style={styles.space} onClick={this.props.onInitiateBattle}>
				 				<button type='button' className='btn btn-lg btn-success'>
				 					Inititate Battle!
				 				</button>
				 			</div>
				 			<div className='col-sm-12' style={styles.space}>
				 				<Link to='/playerOne'>
				 					<button type='button' className='btn btn-lg btn-danger'> Reselect Players</button>
				 				</Link>
				 			</div>
				 		</div>
				 	</div>
			)
	}

};

Confirm.contextTypes = {
	router: React.PropTypes.object.isRequired
}

Confirm.PropTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired,
	onInitiateBattle: React.PropTypes.func.isRequired
}

module.exports = Confirm;