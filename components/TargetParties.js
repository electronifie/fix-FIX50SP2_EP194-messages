var NoTargetPartyIDs = require('../fields/NoTargetPartyIDs');
var TargetPtysSubGrp = require('../components/TargetPtysSubGrp');
var TargetPartyID = require('../fields/TargetPartyID');
var TargetPartyIDSource = require('../fields/TargetPartyIDSource');
var TargetPartyRole = require('../fields/TargetPartyRole');
var TargetPartyRoleQualifier = require('../fields/TargetPartyRoleQualifier');

function TargetParties (targetParties) {
  this.message = targetParties;
}

/* group */

/* component */
TargetParties.prototype.targetPtysSubGrp = function () {
  return this.message.groups[TargetPtysSubGrp.Tag]
    .map(function (targetPtysSubGrp) {
      return new TargetPtysSubGrp(targetPtysSubGrp);
  });
};

/* field */
TargetParties.prototype.targetPartyId = function () {
  return new TargetPartyID(this.message.tags[TargetPartyID.Tag]);
};

/* field */
TargetParties.prototype.targetPartyIdsource = function () {
  return new TargetPartyIDSource(this.message.tags[TargetPartyIDSource.Tag]);
};

/* field */
TargetParties.prototype.targetPartyRole = function () {
  return new TargetPartyRole(this.message.tags[TargetPartyRole.Tag]);
};

/* field */
TargetParties.prototype.targetPartyRoleQualifier = function () {
  return new TargetPartyRoleQualifier(this.message.tags[TargetPartyRoleQualifier.Tag]);
};

/* end group */

TargetParties.Tag = '1461';

module.exports = TargetParties;