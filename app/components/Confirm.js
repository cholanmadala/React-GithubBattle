import React from 'react';

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
				 <p>Loading.... Loading... Loading</p>
				 : <div>GitHub Battle : {puke(this.props)}</div>
			)
	}

};

export default Confirm;