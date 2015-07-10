var NoProvisionPartyIDs = require('../fields/NoProvisionPartyIDs');
var ProvisionPtysSubGrp = require('../components/ProvisionPtysSubGrp');
var ProvisionPartyID = require('../fields/ProvisionPartyID');
var ProvisionPartyIDSource = require('../fields/ProvisionPartyIDSource');
var ProvisionPartyRole = require('../fields/ProvisionPartyRole');
var ProvisionPartyRoleQualifier = require('../fields/ProvisionPartyRoleQualifier');

function ProvisionParties (provisionParties) {
  this.message = provisionParties;
}

/* group */

/* component */
ProvisionParties.prototype.provisionPtysSubGrp = function () {
  return this.message.groups[ProvisionPtysSubGrp.Tag]
    .map(function (provisionPtysSubGrp) {
      return new ProvisionPtysSubGrp(provisionPtysSubGrp);
  });
};

/* field */
ProvisionParties.prototype.provisionPartyId = function () {
  return new ProvisionPartyID(this.message.tags[ProvisionPartyID.Tag]);
};

/* field */
ProvisionParties.prototype.provisionPartyIdsource = function () {
  return new ProvisionPartyIDSource(this.message.tags[ProvisionPartyIDSource.Tag]);
};

/* field */
ProvisionParties.prototype.provisionPartyRole = function () {
  return new ProvisionPartyRole(this.message.tags[ProvisionPartyRole.Tag]);
};

/* field */
ProvisionParties.prototype.provisionPartyRoleQualifier = function () {
  return new ProvisionPartyRoleQualifier(this.message.tags[ProvisionPartyRoleQualifier.Tag]);
};

/* end group */

ProvisionParties.Tag = '40174';

module.exports = ProvisionParties;