var invert = require('invert-obj');

function LegPaymentStubFixedCurrency (legPaymentStubFixedCurrency) {
  this.message = legPaymentStubFixedCurrency;
}

LegPaymentStubFixedCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStubFixedCurrency.Tag = '40423';

LegPaymentStubFixedCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStubFixedCurrency;