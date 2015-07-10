var NoTargetPartySubIDs = require('../fields/NoTargetPartySubIDs');
var TargetPartySubID = require('../fields/TargetPartySubID');
var TargetPartySubIDType = require('../fields/TargetPartySubIDType');

function TargetPtysSubGrp (targetPtysSubGrp) {
  this.message = targetPtysSubGrp;
}

/* group */

/* field */
TargetPtysSubGrp.prototype.targetPartySubId = function () {
  return new TargetPartySubID(this.message.tags[TargetPartySubID.Tag]);
};

/* field */
TargetPtysSubGrp.prototype.targetPartySubIdtype = function () {
  return new TargetPartySubIDType(this.message.tags[TargetPartySubIDType.Tag]);
};

/* end group */

TargetPtysSubGrp.Tag = '2433';

module.exports = TargetPtysSubGrp;