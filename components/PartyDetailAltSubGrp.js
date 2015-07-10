var NoPartyDetailAltSubIDs = require('../fields/NoPartyDetailAltSubIDs');
var PartyDetailAltSubID = require('../fields/PartyDetailAltSubID');
var PartyDetailAltSubIDType = require('../fields/PartyDetailAltSubIDType');

function PartyDetailAltSubGrp (partyDetailAltSubGrp) {
  this.message = partyDetailAltSubGrp;
}

/* group */

/* field */
PartyDetailAltSubGrp.prototype.partyDetailAltSubId = function () {
  return new PartyDetailAltSubID(this.message.tags[PartyDetailAltSubID.Tag]);
};

/* field */
PartyDetailAltSubGrp.prototype.partyDetailAltSubIdtype = function () {
  return new PartyDetailAltSubIDType(this.message.tags[PartyDetailAltSubIDType.Tag]);
};

/* end group */

PartyDetailAltSubGrp.Tag = '1519';

module.exports = PartyDetailAltSubGrp;