import React, { findDOMNode } from 'react';

var League = React.createClass({
  render: function() {
    var id = this.props.params.id;

    return (
      <div className="League">
        {this.props.children || "League " + id}
      </div>
    );
  }
});

export default League;
