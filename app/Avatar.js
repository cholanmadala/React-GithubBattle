import React from 'react';
import ReactDOM from 'react-dom';

class ProfileName extends React.Component {
	constructor(){
		super();
	}
 
 	render(){
 		return (<div>The name of the developer is {this.props.name}.</div>)
 	}
};

class ProfileLink extends React.Component {
	constructor(){
		super();
	}
 
 	render(){
 		return(
 			<div>
 				<a href={`https://github.com/${this.props.username}`}>{this.props.name}</a>
 			</div>
 			)
 	}
};

class ProfilePic extends React.Component {
	constructor(){
		super();
	}
 
 	render(){
 		return(
 			<img src={this.props.imageUrl} alt={this.props.altName} />
 			)
 	}
};

class Avatar extends React.Component {
	constructor() {
		super();
	}

	render() {
		console.log(this.props.children);
		return (
			<div> 
				<ProfilePic  imageUrl={this.props.user.imageUrl} altName={this.props.userName} />
				<ProfileLink username={this.props.user.username} name={this.props.user.name}/>
				<ProfileName name={this.props.user.name}/>
			</div>
		)
	}

};

export default Avatar;
