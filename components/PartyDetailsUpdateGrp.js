var NoPartyUpdates = require('../fields/NoPartyUpdates');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');

function PartyDetailsUpdateGrp (partyDetailsUpdateGrp) {
  this.message = partyDetailsUpdateGrp;
}

/* group */

/* component */
PartyDetailsUpdateGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* field */
PartyDetailsUpdateGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* end group */

PartyDetailsUpdateGrp.Tag = '1676';

module.exports = PartyDetailsUpdateGrp;