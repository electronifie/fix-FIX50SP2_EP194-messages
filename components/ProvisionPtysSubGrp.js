var NoProvisionPartySubIDs = require('../fields/NoProvisionPartySubIDs');
var ProvisionPartySubID = require('../fields/ProvisionPartySubID');
var ProvisionPartySubIDType = require('../fields/ProvisionPartySubIDType');

function ProvisionPtysSubGrp (provisionPtysSubGrp) {
  this.message = provisionPtysSubGrp;
}

/* group */

/* field */
ProvisionPtysSubGrp.prototype.provisionPartySubId = function () {
  return new ProvisionPartySubID(this.message.tags[ProvisionPartySubID.Tag]);
};

/* field */
ProvisionPtysSubGrp.prototype.provisionPartySubIdtype = function () {
  return new ProvisionPartySubIDType(this.message.tags[ProvisionPartySubIDType.Tag]);
};

/* end group */

ProvisionPtysSubGrp.Tag = '40178';

module.exports = ProvisionPtysSubGrp;