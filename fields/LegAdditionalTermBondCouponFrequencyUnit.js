var invert = require('invert-obj');

function LegAdditionalTermBondCouponFrequencyUnit (legAdditionalTermBondCouponFrequencyUnit) {
  this.message = legAdditionalTermBondCouponFrequencyUnit;
}

LegAdditionalTermBondCouponFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCouponFrequencyUnit.Tag = '41333';

LegAdditionalTermBondCouponFrequencyUnit.Type = 'STRING';

module.exports = LegAdditionalTermBondCouponFrequencyUnit;