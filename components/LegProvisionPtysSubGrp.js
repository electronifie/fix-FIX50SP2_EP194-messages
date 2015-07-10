var NoLegProvisionPartySubIDs = require('../fields/NoLegProvisionPartySubIDs');
var LegProvisionPartySubID = require('../fields/LegProvisionPartySubID');
var LegProvisionPartySubIDType = require('../fields/LegProvisionPartySubIDType');

function LegProvisionPtysSubGrp (legProvisionPtysSubGrp) {
  this.message = legProvisionPtysSubGrp;
}

/* group */

/* field */
LegProvisionPtysSubGrp.prototype.legProvisionPartySubId = function () {
  return new LegProvisionPartySubID(this.message.tags[LegProvisionPartySubID.Tag]);
};

/* field */
LegProvisionPtysSubGrp.prototype.legProvisionPartySubIdtype = function () {
  return new LegProvisionPartySubIDType(this.message.tags[LegProvisionPartySubIDType.Tag]);
};

/* end group */

LegProvisionPtysSubGrp.Tag = '40537';

module.exports = LegProvisionPtysSubGrp;