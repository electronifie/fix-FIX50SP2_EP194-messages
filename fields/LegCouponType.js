var invert = require('invert-obj');

function LegCouponType (legCouponType) {
  this.message = legCouponType;
}

LegCouponType.prototype.value = function () {
  return this.message;
};

LegCouponType.Tag = '2161';

LegCouponType.Type = 'INT';

module.exports = LegCouponType;