var React = require('react');
import styles from '../styles';
var ReactRouter = require('react-router');
// import ReactRouter from 'react-router';
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className= 'jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      	<h1>Github Battle</h1>
      	<p className='lead'> Let's play it</p>
      	<Link to='/playerOne'>
      		<button type='button' className='btn btn-lg btn-success'> Get Started </button>
      	</Link>
      </div>
    )
  }
});

module.exports = Home;