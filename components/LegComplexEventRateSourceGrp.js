var NoLegComplexEventRateSources = require('../fields/NoLegComplexEventRateSources');
var LegComplexEventRateSource = require('../fields/LegComplexEventRateSource');
var LegComplexEventRateSourceType = require('../fields/LegComplexEventRateSourceType');
var LegComplexEventReferencePage = require('../fields/LegComplexEventReferencePage');
var LegComplexEvenReferencePageHeading = require('../fields/LegComplexEvenReferencePageHeading');

function LegComplexEventRateSourceGrp (legComplexEventRateSourceGrp) {
  this.message = legComplexEventRateSourceGrp;
}

/* group */

/* field */
LegComplexEventRateSourceGrp.prototype.legComplexEventRateSource = function () {
  return new LegComplexEventRateSource(this.message.tags[LegComplexEventRateSource.Tag]);
};

/* field */
LegComplexEventRateSourceGrp.prototype.legComplexEventRateSourceType = function () {
  return new LegComplexEventRateSourceType(this.message.tags[LegComplexEventRateSourceType.Tag]);
};

/* field */
LegComplexEventRateSourceGrp.prototype.legComplexEventReferencePage = function () {
  return new LegComplexEventReferencePage(this.message.tags[LegComplexEventReferencePage.Tag]);
};

/* field */
LegComplexEventRateSourceGrp.prototype.legComplexEvenReferencePageHeading = function () {
  return new LegComplexEvenReferencePageHeading(this.message.tags[LegComplexEvenReferencePageHeading.Tag]);
};

/* end group */

LegComplexEventRateSourceGrp.Tag = '41382';

module.exports = LegComplexEventRateSourceGrp;