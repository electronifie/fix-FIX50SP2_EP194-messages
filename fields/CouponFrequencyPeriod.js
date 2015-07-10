var invert = require('invert-obj');

function CouponFrequencyPeriod (couponFrequencyPeriod) {
  this.message = couponFrequencyPeriod;
}

CouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

CouponFrequencyPeriod.Tag = '1948';

CouponFrequencyPeriod.Type = 'INT';

module.exports = CouponFrequencyPeriod;