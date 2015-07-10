var invert = require('invert-obj');

function AdditionalTermBondCouponFrequencyUnit (additionalTermBondCouponFrequencyUnit) {
  this.message = additionalTermBondCouponFrequencyUnit;
}

AdditionalTermBondCouponFrequencyUnit.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCouponFrequencyUnit.Tag = '40017';

AdditionalTermBondCouponFrequencyUnit.Type = 'STRING';

module.exports = AdditionalTermBondCouponFrequencyUnit;