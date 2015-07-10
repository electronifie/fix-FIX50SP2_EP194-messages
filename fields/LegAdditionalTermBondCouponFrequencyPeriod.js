var invert = require('invert-obj');

function LegAdditionalTermBondCouponFrequencyPeriod (legAdditionalTermBondCouponFrequencyPeriod) {
  this.message = legAdditionalTermBondCouponFrequencyPeriod;
}

LegAdditionalTermBondCouponFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCouponFrequencyPeriod.Tag = '41332';

LegAdditionalTermBondCouponFrequencyPeriod.Type = 'INT';

module.exports = LegAdditionalTermBondCouponFrequencyPeriod;