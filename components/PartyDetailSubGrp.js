var NoPartyDetailSubIDs = require('../fields/NoPartyDetailSubIDs');
var PartyDetailSubID = require('../fields/PartyDetailSubID');
var PartyDetailSubIDType = require('../fields/PartyDetailSubIDType');

function PartyDetailSubGrp (partyDetailSubGrp) {
  this.message = partyDetailSubGrp;
}

/* group */

/* field */
PartyDetailSubGrp.prototype.partyDetailSubId = function () {
  return new PartyDetailSubID(this.message.tags[PartyDetailSubID.Tag]);
};

/* field */
PartyDetailSubGrp.prototype.partyDetailSubIdtype = function () {
  return new PartyDetailSubIDType(this.message.tags[PartyDetailSubIDType.Tag]);
};

/* end group */

PartyDetailSubGrp.Tag = '1694';

module.exports = PartyDetailSubGrp;