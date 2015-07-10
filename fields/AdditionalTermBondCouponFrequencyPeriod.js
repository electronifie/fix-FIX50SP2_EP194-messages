var invert = require('invert-obj');

function AdditionalTermBondCouponFrequencyPeriod (additionalTermBondCouponFrequencyPeriod) {
  this.message = additionalTermBondCouponFrequencyPeriod;
}

AdditionalTermBondCouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCouponFrequencyPeriod.Tag = '40016';

AdditionalTermBondCouponFrequencyPeriod.Type = 'INT';

module.exports = AdditionalTermBondCouponFrequencyPeriod;