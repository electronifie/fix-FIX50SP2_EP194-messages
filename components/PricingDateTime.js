var PricingDateBusinessCenterGrp = require('../components/PricingDateBusinessCenterGrp');
var PricingDateUnadjusted = require('../fields/PricingDateUnadjusted');
var PricingDateBusinessDayConvention = require('../fields/PricingDateBusinessDayConvention');
var PricingDateAdjusted = require('../fields/PricingDateAdjusted');
var PricingTime = require('../fields/PricingTime');
var PricingTimeBusinessCenter = require('../fields/PricingTimeBusinessCenter');

function PricingDateTime (pricingDateTime) {
  this.message = pricingDateTime;
}
/* component */
PricingDateTime.prototype.pricingDateBusinessCenterGrp = function () {
  return this.message.groups[PricingDateBusinessCenterGrp.Tag]
    .map(function (pricingDateBusinessCenterGrp) {
      return new PricingDateBusinessCenterGrp(pricingDateBusinessCenterGrp);
  });
};

/* field */
PricingDateTime.prototype.pricingDateUnadjusted = function () {
  return new PricingDateUnadjusted(this.message.tags[PricingDateUnadjusted.Tag]);
};

/* field */
PricingDateTime.prototype.pricingDateBusinessDayConvention = function () {
  return new PricingDateBusinessDayConvention(this.message.tags[PricingDateBusinessDayConvention.Tag]);
};

/* field */
PricingDateTime.prototype.pricingDateAdjusted = function () {
  return new PricingDateAdjusted(this.message.tags[PricingDateAdjusted.Tag]);
};

/* field */
PricingDateTime.prototype.pricingTime = function () {
  return new PricingTime(this.message.tags[PricingTime.Tag]);
};

/* field */
PricingDateTime.prototype.pricingTimeBusinessCenter = function () {
  return new PricingTimeBusinessCenter(this.message.tags[PricingTimeBusinessCenter.Tag]);
};



PricingDateTime.Tag = '41232';

module.exports = PricingDateTime;