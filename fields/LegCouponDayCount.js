var invert = require('invert-obj');

function LegCouponDayCount (legCouponDayCount) {
  this.message = legCouponDayCount;
}

LegCouponDayCount.prototype.value = function () {
  return this.message;
};

LegCouponDayCount.Tag = '2165';

LegCouponDayCount.Type = 'INT';

module.exports = LegCouponDayCount;