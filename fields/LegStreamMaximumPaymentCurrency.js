var invert = require('invert-obj');

function LegStreamMaximumPaymentCurrency (legStreamMaximumPaymentCurrency) {
  this.message = legStreamMaximumPaymentCurrency;
}

LegStreamMaximumPaymentCurrency.prototype.value = function () {
  return this.message;
};

LegStreamMaximumPaymentCurrency.Tag = '41553';

LegStreamMaximumPaymentCurrency.Type = 'CURRENCY';

module.exports = LegStreamMaximumPaymentCurrency;