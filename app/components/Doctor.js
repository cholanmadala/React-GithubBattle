var React = require('react');

var Doctor = React.createClass({
  render: function () {
    return (
      <div> Hello from Doctor!
      	<img src={'http://pngimg.com/upload/doctor_PNG15980.png'} />
       </div>
    )
  }
});

module.exports = Doctor;