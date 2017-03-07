import React from 'react';
import styles from '../styles';

class Loading extends React.Component {
	constructor (props) {
		super();
		this.state = {
			text : props.text,
			speed : 300
		}
	}
	render () {
		return  (
			<div style={styles.loading}> {this.state.text} </div>
			)
	}

}

export default Loading;