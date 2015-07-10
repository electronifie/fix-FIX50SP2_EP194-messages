var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCouponRate (underlyingAdditionalTermBondCouponRate) {
  this.message = underlyingAdditionalTermBondCouponRate;
}

UnderlyingAdditionalTermBondCouponRate.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCouponRate.Tag = '42029';

UnderlyingAdditionalTermBondCouponRate.Type = 'PERCENTAGE';

module.exports = UnderlyingAdditionalTermBondCouponRate;