var invert = require('invert-obj');

function UnderlyingPaymentStreamMaximumPaymentCurrency (underlyingPaymentStreamMaximumPaymentCurrency) {
  this.message = underlyingPaymentStreamMaximumPaymentCurrency;
}

UnderlyingPaymentStreamMaximumPaymentCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMaximumPaymentCurrency.Tag = '41901';

UnderlyingPaymentStreamMaximumPaymentCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamMaximumPaymentCurrency;