var invert = require('invert-obj');

function AdditionalTermBondCouponType (additionalTermBondCouponType) {
  this.message = additionalTermBondCouponType;
}

AdditionalTermBondCouponType.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCouponType.Tag = '40011';

AdditionalTermBondCouponType.Type = 'INT';

module.exports = AdditionalTermBondCouponType;