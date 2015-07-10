var NoUndlyInstrumentParties = require('../fields/NoUndlyInstrumentParties');
var UndlyInstrumentPtysSubGrp = require('../components/UndlyInstrumentPtysSubGrp');
var UnderlyingInstrumentPartyID = require('../fields/UnderlyingInstrumentPartyID');
var UnderlyingInstrumentPartyIDSource = require('../fields/UnderlyingInstrumentPartyIDSource');
var UnderlyingInstrumentPartyRole = require('../fields/UnderlyingInstrumentPartyRole');
var UnderlyingInstrumentPartyRoleQualifier = require('../fields/UnderlyingInstrumentPartyRoleQualifier');

function UndlyInstrumentParties (undlyInstrumentParties) {
  this.message = undlyInstrumentParties;
}

/* group */

/* component */
UndlyInstrumentParties.prototype.undlyInstrumentPtysSubGrp = function () {
  return this.message.groups[UndlyInstrumentPtysSubGrp.Tag]
    .map(function (undlyInstrumentPtysSubGrp) {
      return new UndlyInstrumentPtysSubGrp(undlyInstrumentPtysSubGrp);
  });
};

/* field */
UndlyInstrumentParties.prototype.underlyingInstrumentPartyId = function () {
  return new UnderlyingInstrumentPartyID(this.message.tags[UnderlyingInstrumentPartyID.Tag]);
};

/* field */
UndlyInstrumentParties.prototype.underlyingInstrumentPartyIdsource = function () {
  return new UnderlyingInstrumentPartyIDSource(this.message.tags[UnderlyingInstrumentPartyIDSource.Tag]);
};

/* field */
UndlyInstrumentParties.prototype.underlyingInstrumentPartyRole = function () {
  return new UnderlyingInstrumentPartyRole(this.message.tags[UnderlyingInstrumentPartyRole.Tag]);
};

/* field */
UndlyInstrumentParties.prototype.underlyingInstrumentPartyRoleQualifier = function () {
  return new UnderlyingInstrumentPartyRoleQualifier(this.message.tags[UnderlyingInstrumentPartyRoleQualifier.Tag]);
};

/* end group */

UndlyInstrumentParties.Tag = '1058';

module.exports = UndlyInstrumentParties;