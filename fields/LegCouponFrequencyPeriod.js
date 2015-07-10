var invert = require('invert-obj');

function LegCouponFrequencyPeriod (legCouponFrequencyPeriod) {
  this.message = legCouponFrequencyPeriod;
}

LegCouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegCouponFrequencyPeriod.Tag = '2163';

LegCouponFrequencyPeriod.Type = 'INT';

module.exports = LegCouponFrequencyPeriod;