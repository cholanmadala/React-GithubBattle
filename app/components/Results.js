import React from 'react';
import styles from '../styles';
import UserDetails from './UserDetails';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function Results (props) {
	let winningIndex  = props.scores[0] > props.scores[1]  ? 0 : 1;
	let losingIndex  = props.scores[0] > props.scores[1]  ? 1 : 0;
	return (
			<div className= 'jumbotron col-sm-12 text-center' style={styles.transparentBg}>
		 		<h1>Results</h1>
		 		<div className='col-sm-8 col-sm-offset-2'>
		 			<div className='col-sm-6'>
			 				<UserDetails header={'Winner'} score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
		 			</div>
		 			<div className='col-sm-6'>
			 				<UserDetails header={'Loser'} score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
		 			</div>
		 		</div>
		 		<div className='col-sm-8 col-sm-offset-2'>
		 			<div className='col-sm-12' style={styles.space}>
		 				<Link to='/playerOne'>
		 					<button type='button' className='btn btn-lg btn-danger'>Start Over</button>
		 				</Link>
		 			</div>
				 </div>
			</div>
		)
};

Results.PropTypes = {
	isLoading : PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores:PropTypes.array.isRequired
};
module.exports = Results;