var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCouponType (underlyingAdditionalTermBondCouponType) {
  this.message = underlyingAdditionalTermBondCouponType;
}

UnderlyingAdditionalTermBondCouponType.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCouponType.Tag = '42028';

UnderlyingAdditionalTermBondCouponType.Type = 'INT';

module.exports = UnderlyingAdditionalTermBondCouponType;