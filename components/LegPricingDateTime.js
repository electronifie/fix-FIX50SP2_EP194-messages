var LegPricingDateBusinessCenterGrp = require('../components/LegPricingDateBusinessCenterGrp');
var LegPricingDateUnadjusted = require('../fields/LegPricingDateUnadjusted');
var LegPricingDateBusinessDayConvention = require('../fields/LegPricingDateBusinessDayConvention');
var LegPricingDateAdjusted = require('../fields/LegPricingDateAdjusted');
var LegPricingTime = require('../fields/LegPricingTime');
var LegPricingTimeBusinessCenter = require('../fields/LegPricingTimeBusinessCenter');

function LegPricingDateTime (legPricingDateTime) {
  this.message = legPricingDateTime;
}
/* component */
LegPricingDateTime.prototype.legPricingDateBusinessCenterGrp = function () {
  return this.message.groups[LegPricingDateBusinessCenterGrp.Tag]
    .map(function (legPricingDateBusinessCenterGrp) {
      return new LegPricingDateBusinessCenterGrp(legPricingDateBusinessCenterGrp);
  });
};

/* field */
LegPricingDateTime.prototype.legPricingDateUnadjusted = function () {
  return new LegPricingDateUnadjusted(this.message.tags[LegPricingDateUnadjusted.Tag]);
};

/* field */
LegPricingDateTime.prototype.legPricingDateBusinessDayConvention = function () {
  return new LegPricingDateBusinessDayConvention(this.message.tags[LegPricingDateBusinessDayConvention.Tag]);
};

/* field */
LegPricingDateTime.prototype.legPricingDateAdjusted = function () {
  return new LegPricingDateAdjusted(this.message.tags[LegPricingDateAdjusted.Tag]);
};

/* field */
LegPricingDateTime.prototype.legPricingTime = function () {
  return new LegPricingTime(this.message.tags[LegPricingTime.Tag]);
};

/* field */
LegPricingDateTime.prototype.legPricingTimeBusinessCenter = function () {
  return new LegPricingTimeBusinessCenter(this.message.tags[LegPricingTimeBusinessCenter.Tag]);
};



LegPricingDateTime.Tag = '41609';

module.exports = LegPricingDateTime;