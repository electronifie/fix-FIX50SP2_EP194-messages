var NoLegInstrumentParties = require('../fields/NoLegInstrumentParties');
var LegInstrumentPtysSubGrp = require('../components/LegInstrumentPtysSubGrp');
var LegInstrumentPartyID = require('../fields/LegInstrumentPartyID');
var LegInstrumentPartyIDSource = require('../fields/LegInstrumentPartyIDSource');
var LegInstrumentPartyRole = require('../fields/LegInstrumentPartyRole');
var LegInstrumentPartyRoleQualifier = require('../fields/LegInstrumentPartyRoleQualifier');

function LegInstrumentParties (legInstrumentParties) {
  this.message = legInstrumentParties;
}

/* group */

/* component */
LegInstrumentParties.prototype.legInstrumentPtysSubGrp = function () {
  return this.message.groups[LegInstrumentPtysSubGrp.Tag]
    .map(function (legInstrumentPtysSubGrp) {
      return new LegInstrumentPtysSubGrp(legInstrumentPtysSubGrp);
  });
};

/* field */
LegInstrumentParties.prototype.legInstrumentPartyId = function () {
  return new LegInstrumentPartyID(this.message.tags[LegInstrumentPartyID.Tag]);
};

/* field */
LegInstrumentParties.prototype.legInstrumentPartyIdsource = function () {
  return new LegInstrumentPartyIDSource(this.message.tags[LegInstrumentPartyIDSource.Tag]);
};

/* field */
LegInstrumentParties.prototype.legInstrumentPartyRole = function () {
  return new LegInstrumentPartyRole(this.message.tags[LegInstrumentPartyRole.Tag]);
};

/* field */
LegInstrumentParties.prototype.legInstrumentPartyRoleQualifier = function () {
  return new LegInstrumentPartyRoleQualifier(this.message.tags[LegInstrumentPartyRoleQualifier.Tag]);
};

/* end group */

LegInstrumentParties.Tag = '2254';

module.exports = LegInstrumentParties;