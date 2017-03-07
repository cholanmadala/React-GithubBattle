import React from 'react';
import styles from '../styles';
var PropTypes = React.PropTypes;

//Stateless functional components

function Prompt (props) {
	return (
		<div className = 'jumbotron col-sm-6 col-sm-offset-3 text-center' style = { styles.transparentBg }>
			<h1> { props.header } </h1>
			<div className = "col-sm-12">
				<form onSubmit = { props.onSubmitUser }>
					<div className = "form-group">
						<input className = "form-control" placeholder = 'github username' type = 'text' onChange = { props.onChangeUser } value = { props.username } />
					</div>
					<div className = 'form-group col-sm-4 col-sm-offset-4'>
						<button className = 'btn btn-block btn-success' type = 'submit'>Continue </button>
					</div>
				</form>
			</div>
		</div>
	)
};



Prompt.propTypes ={
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onChangeUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
}
Prompt.defaultProps = {
	header:'Some Basic Header',
	username: 'cholanmadala'
}

export default Prompt;