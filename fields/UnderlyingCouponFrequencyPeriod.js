var invert = require('invert-obj');

function UnderlyingCouponFrequencyPeriod (underlyingCouponFrequencyPeriod) {
  this.message = underlyingCouponFrequencyPeriod;
}

UnderlyingCouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingCouponFrequencyPeriod.Tag = '1991';

UnderlyingCouponFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingCouponFrequencyPeriod;