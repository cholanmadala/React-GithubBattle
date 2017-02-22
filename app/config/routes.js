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
var PromptContainer = require("../containers/PromptContainer");
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Author' component={Author}/>
      <Route path='Doctor' component={Doctor}/>
      <Route path='playerOne' header='Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
      <Route path='battle' component={ConfirmBattleContainer}/>
      <Route path='Politician' component={Politician}/>
      <Route path='results' component={Politician}/>
    </Route>
  </Router>
);

module.exports = routes;