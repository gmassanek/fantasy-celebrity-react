import React, { findDOMNode } from 'react';

var Leagues = React.createClass({
  render: function() {
    return (
      <div className="Leagues">
        {this.props.children || "Leagues"}
      </div>
    );
  }
});

export default Leagues;
