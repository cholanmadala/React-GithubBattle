var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Author = require("../components/Author");
var Player = require("../components/Player");
var Doctor = require("../components/Doctor");
var Politician = require("../components/Politician");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Author' component={Author}/>
      <Route path='Doctor' component={Doctor}/>
      <Route path='Player' component={Player}/>
      <Route path='Politician' component={Politician}/>
    </Route>
  </Router>
);

module.exports = routes;