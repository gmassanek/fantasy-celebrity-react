var Caplet = require("caplet");
var _ = require("underscore");
import RosterSlotModel from '../models/rosterSlot';

var TeamModel = Caplet.createModelClass({
  fromData: function(data) {
    var team = {
      id: data.team.id,
      title: data.team.title,
      rosterSlots: []
    };

    if(data.team.roster_slot_ids !== undefined && data.roster_slots !== undefined) {
      team.rosterSlots = data.team.roster_slot_ids.map(function(rosterSlotId) {
        var rosterSlotData = _.find(data.roster_slots, function(rosterSlot) { return rosterSlot.id === rosterSlotId; });
        var rosterSlot = RosterSlotModel({data: {
          rosterSlot: rosterSlotData,
          leaguePlayers: data.league_players,
          leaguePositions: data.league_positions
        }});
        return rosterSlot;
      });
    }

    return team;
  }
});

export default TeamModel;
