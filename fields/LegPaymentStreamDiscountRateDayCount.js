var invert = require('invert-obj');

function LegPaymentStreamDiscountRateDayCount (legPaymentStreamDiscountRateDayCount) {
  this.message = legPaymentStreamDiscountRateDayCount;
}

LegPaymentStreamDiscountRateDayCount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamDiscountRateDayCount.Tag = '40287';

LegPaymentStreamDiscountRateDayCount.Type = 'INT';

module.exports = LegPaymentStreamDiscountRateDayCount;