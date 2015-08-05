import React, { findDOMNode } from 'react';
import { Link } from 'react-router';
import DataTable from './DataTable';
import TeamModel from '../models/team';

var Team = React.createClass({
  getInitialState: function() {
    return {
      team: TeamModel({data: {team: {}}})
    };
  },

  componentDidMount: function() {
    $.get(`/api/v1/teams/${this.props.params.team_id}`, function(result) {
      if (this.isMounted()) {
        this.setState({ team: TeamModel({data: result}) });
      }
    }.bind(this));
  },

  render: function() {
    console.log("Render Team");

    var rows = [];
    this.state.team.rosterSlots.forEach(function(rosterSlot) {
      rows.push(
        <tr>
          <td>{rosterSlot.leaguePlayer.name}</td>
          <td>{rosterSlot.leaguePosition.title}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <h2>{ this.state.team.title }</h2>

        <div className="portlet portlet-default">
          <div className="portlet-header">
            <h4 className="portlet-title">
              Roster
              <Link to={`/leagues/${this.props.params.league_id}/teams/${this.props.params.team_id}/edit`} className="pull-right fa fa-edit">
                Edit Roster
              </Link>
            </h4>
          </div>
        </div>

        <DataTable ordering={true} initOrderCol={1}>
          <thead>
            <tr role="row">
              <th aria-label="Player">Player</th>
              <th aria-label="Position">Position</th>
              <th aria-label="Legal Points">Legal Points</th>
              <th aria-label="Fighting Points">Fighting Points</th>
              <th aria-label="Career Points">Career Points</th>
              <th aria-label="Marital Points">Marital Points</th>
              <th aria-label="Health Points">Health Points</th>
              <th aria-label="Other Points">Other Points</th>
              <th aria-label="Total Points">Total Points</th>
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

export default Team;
