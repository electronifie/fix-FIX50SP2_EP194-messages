var invert = require('invert-obj');

function PaymentStreamMaximumTransactionCurrency (paymentStreamMaximumTransactionCurrency) {
  this.message = paymentStreamMaximumTransactionCurrency;
}

PaymentStreamMaximumTransactionCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamMaximumTransactionCurrency.Tag = '41186';

PaymentStreamMaximumTransactionCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamMaximumTransactionCurrency;