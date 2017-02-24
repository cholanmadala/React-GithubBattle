import React from 'react';
import styles from '../styles';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function StartOver () {
	return (
		<div className='col-sm-8 col-sm-offset-2'>
 			<div className='col-sm-12' style={styles.space}>
 				<Link to='/playerOne'>
 					<button type='button' className='btn btn-lg btn-danger'>Start Over</button>
 				</Link>
 			</div>
		</div>
		)
}

function Results (props) {
	if (!props.isLoading && props.scores[0] === props.scores[1] ){
		return (
			<MainContainer>
				<h1> It's a Tie</h1>
				<StartOver />
			</MainContainer>
			)
	}

	let winningIndex  = props.scores[0] > props.scores[1]  ? 0 : 1;
	let losingIndex  = props.scores[0] > props.scores[1]  ? 1 : 0;
	return (
			<MainContainer>
		 		<h1>Results</h1>
		 		<div className='col-sm-8 col-sm-offset-2'>
		 			<div className='col-sm-6'>
			 				<UserDetails header={'Winner'} score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
		 			</div>
		 			<div className='col-sm-6'>
			 				<UserDetails header={'Loser'} score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
		 			</div>
		 		</div>
		 		<StartOver />
			</MainContainer>
		)
};

Results.PropTypes = {
	isLoading : PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores:PropTypes.array.isRequired
};
module.exports = Results;