var invert = require('invert-obj');

function UnderlyingCouponType (underlyingCouponType) {
  this.message = underlyingCouponType;
}

UnderlyingCouponType.prototype.value = function () {
  return this.message;
};

UnderlyingCouponType.Tag = '1989';

UnderlyingCouponType.Type = 'INT';

module.exports = UnderlyingCouponType;