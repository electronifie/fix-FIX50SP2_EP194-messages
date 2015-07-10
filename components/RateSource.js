var NoRateSources = require('../fields/NoRateSources');
var RateSource = require('../fields/RateSource');
var RateSourceType = require('../fields/RateSourceType');
var ReferencePage = require('../fields/ReferencePage');
var RateSourceReferemcePageHeading = require('../fields/RateSourceReferemcePageHeading');

function RateSource (rateSource) {
  this.message = rateSource;
}

/* group */

/* field */
RateSource.prototype.rateSource = function () {
  return new RateSource(this.message.tags[RateSource.Tag]);
};

/* field */
RateSource.prototype.rateSourceType = function () {
  return new RateSourceType(this.message.tags[RateSourceType.Tag]);
};

/* field */
RateSource.prototype.referencePage = function () {
  return new ReferencePage(this.message.tags[ReferencePage.Tag]);
};

/* field */
RateSource.prototype.rateSourceReferemcePageHeading = function () {
  return new RateSourceReferemcePageHeading(this.message.tags[RateSourceReferemcePageHeading.Tag]);
};

/* end group */

RateSource.Tag = '1445';

module.exports = RateSource;