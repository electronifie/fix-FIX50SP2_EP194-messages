var invert = require('invert-obj');

function UnderlyingCouponDayCount (underlyingCouponDayCount) {
  this.message = underlyingCouponDayCount;
}

UnderlyingCouponDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingCouponDayCount.Tag = '1993';

UnderlyingCouponDayCount.Type = 'INT';

module.exports = UnderlyingCouponDayCount;