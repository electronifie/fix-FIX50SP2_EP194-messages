var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCouponFrequencyPeriod (underlyingAdditionalTermBondCouponFrequencyPeriod) {
  this.message = underlyingAdditionalTermBondCouponFrequencyPeriod;
}

UnderlyingAdditionalTermBondCouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCouponFrequencyPeriod.Tag = '42033';

UnderlyingAdditionalTermBondCouponFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingAdditionalTermBondCouponFrequencyPeriod;