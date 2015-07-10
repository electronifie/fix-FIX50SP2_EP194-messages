var invert = require('invert-obj');

function LegPaymentStreamDiscountType (legPaymentStreamDiscountType) {
  this.message = legPaymentStreamDiscountType;
}

LegPaymentStreamDiscountType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamDiscountType.Tag = '40285';

LegPaymentStreamDiscountType.Type = 'INT';

module.exports = LegPaymentStreamDiscountType;