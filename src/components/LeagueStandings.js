import React, { findDOMNode } from 'react';
import { Link } from 'react-router';
import DataTable from './DataTable';

var LeagueStandings = React.createClass({
  getInitialState: function() {
    return {
      teams: []
    };
  },

  componentDidMount: function() {
    $.get(`/api/v1/teams?league_id=${this.props.params.league_id}`, function(result) {
      if (this.isMounted()) {
        this.setState({ teams: result.teams });
      }
    }.bind(this));
  },

  render: function() {
    console.log("Render League Standings");
    var rows = [];

    var _this = this;
    this.state.teams.forEach(function(team) {
      rows.push(
        <tr>
          <td>{team.id}</td>
          <td>
            <Link to={`/leagues/${_this.props.params.league_id}/teams/${team.id}`}>
              {team.title}
            </Link>
          </td>
          <td>{team.owner}</td>
          <td>0</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <div className="heading-block">
          <h2>Standings</h2>
        </div>

        <DataTable>
          <thead>
            <tr role="row">
              <th aria-label="Rank">Rank</th>
              <th aria-label="Team">Team</th>
              <th aria-label="Owner">Owner</th>
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

export default LeagueStandings;
