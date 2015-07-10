var invert = require('invert-obj');

function LegAdditionalTermBondCouponRate (legAdditionalTermBondCouponRate) {
  this.message = legAdditionalTermBondCouponRate;
}

LegAdditionalTermBondCouponRate.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCouponRate.Tag = '41328';

LegAdditionalTermBondCouponRate.Type = 'PERCENTAGE';

module.exports = LegAdditionalTermBondCouponRate;