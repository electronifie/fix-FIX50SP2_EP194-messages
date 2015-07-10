var invert = require('invert-obj');

function AdditionalTermBondCouponRate (additionalTermBondCouponRate) {
  this.message = additionalTermBondCouponRate;
}

AdditionalTermBondCouponRate.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCouponRate.Tag = '40012';

AdditionalTermBondCouponRate.Type = 'PERCENTAGE';

module.exports = AdditionalTermBondCouponRate;