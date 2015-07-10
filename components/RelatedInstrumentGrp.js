var NoRelatedInstruments = require('../fields/NoRelatedInstruments');
var RelatedInstrumentType = require('../fields/RelatedInstrumentType');
var RelatedSymbol = require('../fields/RelatedSymbol');
var RelatedSecurityID = require('../fields/RelatedSecurityID');
var RelatedSecurityIDSource = require('../fields/RelatedSecurityIDSource');
var RelatedSecurityType = require('../fields/RelatedSecurityType');
var RelatedMaturityMonthYear = require('../fields/RelatedMaturityMonthYear');
var RelatedToSecurityID = require('../fields/RelatedToSecurityID');
var RelatedToSecurityIDSource = require('../fields/RelatedToSecurityIDSource');
var RelatedToStreamXIDRef = require('../fields/RelatedToStreamXIDRef');

function RelatedInstrumentGrp (relatedInstrumentGrp) {
  this.message = relatedInstrumentGrp;
}

/* group */

/* field */
RelatedInstrumentGrp.prototype.relatedInstrumentType = function () {
  return new RelatedInstrumentType(this.message.tags[RelatedInstrumentType.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedSymbol = function () {
  return new RelatedSymbol(this.message.tags[RelatedSymbol.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedSecurityId = function () {
  return new RelatedSecurityID(this.message.tags[RelatedSecurityID.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedSecurityIdsource = function () {
  return new RelatedSecurityIDSource(this.message.tags[RelatedSecurityIDSource.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedSecurityType = function () {
  return new RelatedSecurityType(this.message.tags[RelatedSecurityType.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedMaturityMonthYear = function () {
  return new RelatedMaturityMonthYear(this.message.tags[RelatedMaturityMonthYear.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedToSecurityId = function () {
  return new RelatedToSecurityID(this.message.tags[RelatedToSecurityID.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedToSecurityIdsource = function () {
  return new RelatedToSecurityIDSource(this.message.tags[RelatedToSecurityIDSource.Tag]);
};

/* field */
RelatedInstrumentGrp.prototype.relatedToStreamXidref = function () {
  return new RelatedToStreamXIDRef(this.message.tags[RelatedToStreamXIDRef.Tag]);
};

/* end group */

RelatedInstrumentGrp.Tag = '1647';

module.exports = RelatedInstrumentGrp;