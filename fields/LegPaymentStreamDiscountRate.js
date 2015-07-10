var invert = require('invert-obj');

function LegPaymentStreamDiscountRate (legPaymentStreamDiscountRate) {
  this.message = legPaymentStreamDiscountRate;
}

LegPaymentStreamDiscountRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamDiscountRate.Tag = '40286';

LegPaymentStreamDiscountRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamDiscountRate;