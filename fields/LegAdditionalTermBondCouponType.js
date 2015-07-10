var invert = require('invert-obj');

function LegAdditionalTermBondCouponType (legAdditionalTermBondCouponType) {
  this.message = legAdditionalTermBondCouponType;
}

LegAdditionalTermBondCouponType.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCouponType.Tag = '41327';

LegAdditionalTermBondCouponType.Type = 'INT';

module.exports = LegAdditionalTermBondCouponType;