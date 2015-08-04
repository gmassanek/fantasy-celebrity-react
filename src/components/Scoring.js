import React, { findDOMNode } from 'react';
import DataTable from './DataTable';

var Scoring = React.createClass({
  getInitialState: function() {
    return {
      pointCategories: []
    };
  },

  componentDidMount: function() {
    $.get("/api/v1/leagues/1/league_point_categories", function(result) {
      if (this.isMounted()) {
        this.setState({ pointCategories: result.league_point_categories });
      }
    }.bind(this));
  },

  render: function() {
    console.log("Render Scoring");
    var rows = [];

    this.state.pointCategories.forEach(function(pointCategory) {
      rows.push(
        <tr role="row">
          <td>{pointCategory.group}</td>
          <td>{pointCategory.title}</td>
          <td>{pointCategory.value}</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <div className="heading-block">
          <h3>
            Scoring
          </h3>
        </div> 
        <DataTable ordering={true} searching={true} paging={true} pageLength={30} lengthChange={true}>
          <thead>
            <tr role="row">
              <th aria-label="Group">Group</th>
              <th aria-label="Title">Title</th>
              <th aria-label="Points">Points</th>
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

export default Scoring;
