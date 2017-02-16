var React = require('react');

var Doctor = React.createClass({
  render: function () {
    return (
      <div> Hello from Doctor!
      	<img src={'https://avatars1.githubusercontent.com/u/10980374?v=3&u=3ab61c8aa97730b25a2f2cf38b090f4297969a2e&s=400'} />
       </div>
    )
  }
});

module.exports = Doctor;