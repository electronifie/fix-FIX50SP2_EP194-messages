var NoUnderlyingProvisionPartySubIDs = require('../fields/NoUnderlyingProvisionPartySubIDs');
var UnderlyingProvisionPartySubID = require('../fields/UnderlyingProvisionPartySubID');
var UnderlyingProvisionPartySubIDType = require('../fields/UnderlyingProvisionPartySubIDType');

function UnderlyingProvisionPtysSubGrp (underlyingProvisionPtysSubGrp) {
  this.message = underlyingProvisionPtysSubGrp;
}

/* group */

/* field */
UnderlyingProvisionPtysSubGrp.prototype.underlyingProvisionPartySubId = function () {
  return new UnderlyingProvisionPartySubID(this.message.tags[UnderlyingProvisionPartySubID.Tag]);
};

/* field */
UnderlyingProvisionPtysSubGrp.prototype.underlyingProvisionPartySubIdtype = function () {
  return new UnderlyingProvisionPartySubIDType(this.message.tags[UnderlyingProvisionPartySubIDType.Tag]);
};

/* end group */

UnderlyingProvisionPtysSubGrp.Tag = '42177';

module.exports = UnderlyingProvisionPtysSubGrp;