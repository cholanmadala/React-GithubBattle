import React from 'react';
import ReactDOM from 'react-dom';
import Friends from './Friends';

//ES6 way of writing React js
class HelloWorld extends React.Component{
	constructor(){
		super();
		this.friends = ['Krishna Teja', 'Kamesh', 'Swap', 'Anil', 'Vamsi', 'Manikanta'];
	}
	render(){
		return (
			<div>
				<div>Hello World! This is {this.props.name} </div>
				<Friends friendsList = {this.friends} />
			</div>
			)
	}
};

/*
//Normal way of writing react
var HelloWorld = React.createClass({
	render: function() {
		return ( < div >
			Hello World!This is {this.props.name}. < /div>
		)
	}
});*/

ReactDOM.render( <HelloWorld name="Madala Cholan Satyanarayana"/ > , document.getElementById('app'));
