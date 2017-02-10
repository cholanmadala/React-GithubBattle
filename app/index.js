var React = require('react');
var ReactDOM = require('react-dom');


/*class HelloWorld extends React.component{
	render(){
		return (
				<div>Hello World! This is my first complete React app I developed </div>
			)
	}
};*/

var HelloWorld = React.createClass({
	render: function() {
		return ( < div >
			Hello World!This is my first complete React app from scratch. < /div>
		)
	}
});
ReactDOM.render( < HelloWorld / > , document.getElementById('app'));
