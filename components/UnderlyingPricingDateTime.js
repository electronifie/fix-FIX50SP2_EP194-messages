var UnderlyingPricingDateBusinessCenterGrp = require('../components/UnderlyingPricingDateBusinessCenterGrp');
var UnderlyingPricingDateUnadjusted = require('../fields/UnderlyingPricingDateUnadjusted');
var UnderlyingPricingDateBusinessDayConvention = require('../fields/UnderlyingPricingDateBusinessDayConvention');
var UnderlyingPricingDateAdjusted = require('../fields/UnderlyingPricingDateAdjusted');
var UnderlyingPricingTime = require('../fields/UnderlyingPricingTime');
var UnderlyingPricingTimeBusinessCenter = require('../fields/UnderlyingPricingTimeBusinessCenter');

function UnderlyingPricingDateTime (underlyingPricingDateTime) {
  this.message = underlyingPricingDateTime;
}
/* component */
UnderlyingPricingDateTime.prototype.underlyingPricingDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPricingDateBusinessCenterGrp.Tag]
    .map(function (underlyingPricingDateBusinessCenterGrp) {
      return new UnderlyingPricingDateBusinessCenterGrp(underlyingPricingDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingPricingDateTime.prototype.underlyingPricingDateUnadjusted = function () {
  return new UnderlyingPricingDateUnadjusted(this.message.tags[UnderlyingPricingDateUnadjusted.Tag]);
};

/* field */
UnderlyingPricingDateTime.prototype.underlyingPricingDateBusinessDayConvention = function () {
  return new UnderlyingPricingDateBusinessDayConvention(this.message.tags[UnderlyingPricingDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPricingDateTime.prototype.underlyingPricingDateAdjusted = function () {
  return new UnderlyingPricingDateAdjusted(this.message.tags[UnderlyingPricingDateAdjusted.Tag]);
};

/* field */
UnderlyingPricingDateTime.prototype.underlyingPricingTime = function () {
  return new UnderlyingPricingTime(this.message.tags[UnderlyingPricingTime.Tag]);
};

/* field */
UnderlyingPricingDateTime.prototype.underlyingPricingTimeBusinessCenter = function () {
  return new UnderlyingPricingTimeBusinessCenter(this.message.tags[UnderlyingPricingTimeBusinessCenter.Tag]);
};



UnderlyingPricingDateTime.Tag = '41949';

module.exports = UnderlyingPricingDateTime;