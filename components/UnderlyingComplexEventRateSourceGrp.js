var NoUnderlyingComplexEventRateSources = require('../fields/NoUnderlyingComplexEventRateSources');
var UnderlyingComplexEventRateSource = require('../fields/UnderlyingComplexEventRateSource');
var UnderlyingComplexEventRateSourceType = require('../fields/UnderlyingComplexEventRateSourceType');
var UnderlyingComplexEventReferencePage = require('../fields/UnderlyingComplexEventReferencePage');
var UnderlyingComplexEventReferencePageHeading = require('../fields/UnderlyingComplexEventReferencePageHeading');

function UnderlyingComplexEventRateSourceGrp (underlyingComplexEventRateSourceGrp) {
  this.message = underlyingComplexEventRateSourceGrp;
}

/* group */

/* field */
UnderlyingComplexEventRateSourceGrp.prototype.underlyingComplexEventRateSource = function () {
  return new UnderlyingComplexEventRateSource(this.message.tags[UnderlyingComplexEventRateSource.Tag]);
};

/* field */
UnderlyingComplexEventRateSourceGrp.prototype.underlyingComplexEventRateSourceType = function () {
  return new UnderlyingComplexEventRateSourceType(this.message.tags[UnderlyingComplexEventRateSourceType.Tag]);
};

/* field */
UnderlyingComplexEventRateSourceGrp.prototype.underlyingComplexEventReferencePage = function () {
  return new UnderlyingComplexEventReferencePage(this.message.tags[UnderlyingComplexEventReferencePage.Tag]);
};

/* field */
UnderlyingComplexEventRateSourceGrp.prototype.underlyingComplexEventReferencePageHeading = function () {
  return new UnderlyingComplexEventReferencePageHeading(this.message.tags[UnderlyingComplexEventReferencePageHeading.Tag]);
};

/* end group */

UnderlyingComplexEventRateSourceGrp.Tag = '41732';

module.exports = UnderlyingComplexEventRateSourceGrp;