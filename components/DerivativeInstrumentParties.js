var NoDerivativeInstrumentParties = require('../fields/NoDerivativeInstrumentParties');
var DerivativeInstrumentPartySubIDsGrp = require('../components/DerivativeInstrumentPartySubIDsGrp');
var DerivativeInstrumentPartyID = require('../fields/DerivativeInstrumentPartyID');
var DerivativeInstrumentPartyIDSource = require('../fields/DerivativeInstrumentPartyIDSource');
var DerivativeInstrumentPartyRole = require('../fields/DerivativeInstrumentPartyRole');
var DerivativeInstrumentPartyRoleQualifier = require('../fields/DerivativeInstrumentPartyRoleQualifier');

function DerivativeInstrumentParties (derivativeInstrumentParties) {
  this.message = derivativeInstrumentParties;
}

/* group */

/* component */
DerivativeInstrumentParties.prototype.derivativeInstrumentPartySubIdsGrp = function () {
  return this.message.groups[DerivativeInstrumentPartySubIDsGrp.Tag]
    .map(function (derivativeInstrumentPartySubIdsGrp) {
      return new DerivativeInstrumentPartySubIDsGrp(derivativeInstrumentPartySubIdsGrp);
  });
};

/* field */
DerivativeInstrumentParties.prototype.derivativeInstrumentPartyId = function () {
  return new DerivativeInstrumentPartyID(this.message.tags[DerivativeInstrumentPartyID.Tag]);
};

/* field */
DerivativeInstrumentParties.prototype.derivativeInstrumentPartyIdsource = function () {
  return new DerivativeInstrumentPartyIDSource(this.message.tags[DerivativeInstrumentPartyIDSource.Tag]);
};

/* field */
DerivativeInstrumentParties.prototype.derivativeInstrumentPartyRole = function () {
  return new DerivativeInstrumentPartyRole(this.message.tags[DerivativeInstrumentPartyRole.Tag]);
};

/* field */
DerivativeInstrumentParties.prototype.derivativeInstrumentPartyRoleQualifier = function () {
  return new DerivativeInstrumentPartyRoleQualifier(this.message.tags[DerivativeInstrumentPartyRoleQualifier.Tag]);
};

/* end group */

DerivativeInstrumentParties.Tag = '1292';

module.exports = DerivativeInstrumentParties;