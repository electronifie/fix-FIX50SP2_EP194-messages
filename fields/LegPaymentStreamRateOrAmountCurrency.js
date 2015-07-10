var invert = require('invert-obj');

function LegPaymentStreamRateOrAmountCurrency (legPaymentStreamRateOrAmountCurrency) {
  this.message = legPaymentStreamRateOrAmountCurrency;
}

LegPaymentStreamRateOrAmountCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateOrAmountCurrency.Tag = '40328';

LegPaymentStreamRateOrAmountCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamRateOrAmountCurrency;