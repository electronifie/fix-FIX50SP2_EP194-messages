var invert = require('invert-obj');

function LegPaymentScheduleCurrency (legPaymentScheduleCurrency) {
  this.message = legPaymentScheduleCurrency;
}

LegPaymentScheduleCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleCurrency.Tag = '40382';

LegPaymentScheduleCurrency.Type = 'CURRENCY';

module.exports = LegPaymentScheduleCurrency;