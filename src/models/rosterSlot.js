var Caplet = require("caplet");
var _ = require("underscore");

var RosterSlotModel = Caplet.createModelClass({
  fromData: function(data) {
    var rosterSlot = {
      id: data.rosterSlot.id
    };

    rosterSlot.leaguePlayer = _.find(data.leaguePlayers, function(leaguePlayer) {
      return leaguePlayer.id === data.rosterSlot.league_player_id;
    });

    rosterSlot.leaguePosition = _.find(data.leaguePositions, function(leaguePosition) {
      return leaguePosition.id === data.rosterSlot.league_position_id;
    });

    return rosterSlot;
  }
});

export default RosterSlotModel;
