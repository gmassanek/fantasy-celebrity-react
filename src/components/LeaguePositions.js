import React, { findDOMNode } from 'react';
import DataTable from './DataTable';

var LeaguePositions = React.createClass({
  getInitialState: function() {
    return {
      leaguePositions: []
    };
  },

  componentDidMount: function() {
    $.get(`/api/v1/leagues/${this.props.params.league_id}/positions`, function(result) {
      if (this.isMounted()) {
        this.setState({ leaguePositions: result.positions });
      }
    }.bind(this));
  },

  render: function() {
    console.log("Render League Positions");
    var rows = [];

    this.state.leaguePositions.forEach(function(position) {
      rows.push(
        <tr>
          <td>{position.title}</td>
          <td>{position.count}</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <div className="heading-block">
          <h3>
            Positions
          </h3>
        </div> 
        <DataTable>
          <thead>
            <tr role="row">
              <th aria-label="Position">Position</th>
              <th aria-label="Count">Count</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </DataTable>
      </div>
    );
  }
});

export default LeaguePositions;
