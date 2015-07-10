var invert = require('invert-obj');

function PaymentStreamMaximumPaymentCurrency (paymentStreamMaximumPaymentCurrency) {
  this.message = paymentStreamMaximumPaymentCurrency;
}

PaymentStreamMaximumPaymentCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamMaximumPaymentCurrency.Tag = '41184';

PaymentStreamMaximumPaymentCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamMaximumPaymentCurrency;