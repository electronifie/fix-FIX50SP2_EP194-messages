var NoComplexEventRateSources = require('../fields/NoComplexEventRateSources');
var ComplexEventRateSource = require('../fields/ComplexEventRateSource');
var ComplexEventRateSourceType = require('../fields/ComplexEventRateSourceType');
var ComplexEventReferencePage = require('../fields/ComplexEventReferencePage');
var ComplexEventReferencePageHeading = require('../fields/ComplexEventReferencePageHeading');

function ComplexEventRateSourceGrp (complexEventRateSourceGrp) {
  this.message = complexEventRateSourceGrp;
}

/* group */

/* field */
ComplexEventRateSourceGrp.prototype.complexEventRateSource = function () {
  return new ComplexEventRateSource(this.message.tags[ComplexEventRateSource.Tag]);
};

/* field */
ComplexEventRateSourceGrp.prototype.complexEventRateSourceType = function () {
  return new ComplexEventRateSourceType(this.message.tags[ComplexEventRateSourceType.Tag]);
};

/* field */
ComplexEventRateSourceGrp.prototype.complexEventReferencePage = function () {
  return new ComplexEventReferencePage(this.message.tags[ComplexEventReferencePage.Tag]);
};

/* field */
ComplexEventRateSourceGrp.prototype.complexEventReferencePageHeading = function () {
  return new ComplexEventReferencePageHeading(this.message.tags[ComplexEventReferencePageHeading.Tag]);
};

/* end group */

ComplexEventRateSourceGrp.Tag = '41013';

module.exports = ComplexEventRateSourceGrp;