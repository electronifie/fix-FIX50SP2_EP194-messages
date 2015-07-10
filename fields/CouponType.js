var invert = require('invert-obj');

function CouponType (couponType) {
  this.message = couponType;
}

CouponType.prototype.value = function () {
  return this.message;
};


CouponType.Keys = {
  ZERO: '0',
  FIXED_RATE: '1',
  FLOATING_RATE: '2',
  STRUCTURED: '3',
};

CouponType.Tag = '1946';

CouponType.Type = 'INT';

CouponType.Values = invert(CouponType.Keys);

module.exports = CouponType;