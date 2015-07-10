var NoLegProvisionPartyIDs = require('../fields/NoLegProvisionPartyIDs');
var LegProvisionPtysSubGrp = require('../components/LegProvisionPtysSubGrp');
var LegProvisionPartyID = require('../fields/LegProvisionPartyID');
var LegProvisionPartyIDSource = require('../fields/LegProvisionPartyIDSource');
var LegProvisionPartyRole = require('../fields/LegProvisionPartyRole');
var LegProvisionPartyRoleQualifier = require('../fields/LegProvisionPartyRoleQualifier');

function LegProvisionParties (legProvisionParties) {
  this.message = legProvisionParties;
}

/* group */

/* component */
LegProvisionParties.prototype.legProvisionPtysSubGrp = function () {
  return this.message.groups[LegProvisionPtysSubGrp.Tag]
    .map(function (legProvisionPtysSubGrp) {
      return new LegProvisionPtysSubGrp(legProvisionPtysSubGrp);
  });
};

/* field */
LegProvisionParties.prototype.legProvisionPartyId = function () {
  return new LegProvisionPartyID(this.message.tags[LegProvisionPartyID.Tag]);
};

/* field */
LegProvisionParties.prototype.legProvisionPartyIdsource = function () {
  return new LegProvisionPartyIDSource(this.message.tags[LegProvisionPartyIDSource.Tag]);
};

/* field */
LegProvisionParties.prototype.legProvisionPartyRole = function () {
  return new LegProvisionPartyRole(this.message.tags[LegProvisionPartyRole.Tag]);
};

/* field */
LegProvisionParties.prototype.legProvisionPartyRoleQualifier = function () {
  return new LegProvisionPartyRoleQualifier(this.message.tags[LegProvisionPartyRoleQualifier.Tag]);
};

/* end group */

LegProvisionParties.Tag = '40533';

module.exports = LegProvisionParties;