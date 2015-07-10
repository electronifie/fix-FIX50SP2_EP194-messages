var NoUnderlyingProvisionPartyIDs = require('../fields/NoUnderlyingProvisionPartyIDs');
var UnderlyingProvisionPtysSubGrp = require('../components/UnderlyingProvisionPtysSubGrp');
var UnderlyingProvisionPartyID = require('../fields/UnderlyingProvisionPartyID');
var UnderlyingProvisionPartyIDSource = require('../fields/UnderlyingProvisionPartyIDSource');
var UnderlyingProvisionPartyRole = require('../fields/UnderlyingProvisionPartyRole');
var UnderlyingProvisionPartyRoleQualifier = require('../fields/UnderlyingProvisionPartyRoleQualifier');

function UnderlyingProvisionParties (underlyingProvisionParties) {
  this.message = underlyingProvisionParties;
}

/* group */

/* component */
UnderlyingProvisionParties.prototype.underlyingProvisionPtysSubGrp = function () {
  return this.message.groups[UnderlyingProvisionPtysSubGrp.Tag]
    .map(function (underlyingProvisionPtysSubGrp) {
      return new UnderlyingProvisionPtysSubGrp(underlyingProvisionPtysSubGrp);
  });
};

/* field */
UnderlyingProvisionParties.prototype.underlyingProvisionPartyId = function () {
  return new UnderlyingProvisionPartyID(this.message.tags[UnderlyingProvisionPartyID.Tag]);
};

/* field */
UnderlyingProvisionParties.prototype.underlyingProvisionPartyIdsource = function () {
  return new UnderlyingProvisionPartyIDSource(this.message.tags[UnderlyingProvisionPartyIDSource.Tag]);
};

/* field */
UnderlyingProvisionParties.prototype.underlyingProvisionPartyRole = function () {
  return new UnderlyingProvisionPartyRole(this.message.tags[UnderlyingProvisionPartyRole.Tag]);
};

/* field */
UnderlyingProvisionParties.prototype.underlyingProvisionPartyRoleQualifier = function () {
  return new UnderlyingProvisionPartyRoleQualifier(this.message.tags[UnderlyingProvisionPartyRoleQualifier.Tag]);
};

/* end group */

UnderlyingProvisionParties.Tag = '42173';

module.exports = UnderlyingProvisionParties;