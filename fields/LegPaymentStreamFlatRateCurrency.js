var invert = require('invert-obj');

function LegPaymentStreamFlatRateCurrency (legPaymentStreamFlatRateCurrency) {
  this.message = legPaymentStreamFlatRateCurrency;
}

LegPaymentStreamFlatRateCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFlatRateCurrency.Tag = '41551';

LegPaymentStreamFlatRateCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamFlatRateCurrency;