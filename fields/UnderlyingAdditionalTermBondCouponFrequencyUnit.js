var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCouponFrequencyUnit (underlyingAdditionalTermBondCouponFrequencyUnit) {
  this.message = underlyingAdditionalTermBondCouponFrequencyUnit;
}

UnderlyingAdditionalTermBondCouponFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCouponFrequencyUnit.Tag = '42034';

UnderlyingAdditionalTermBondCouponFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondCouponFrequencyUnit;