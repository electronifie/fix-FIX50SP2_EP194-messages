var invert = require('invert-obj');

function UnderlyingPaymentStreamMaximumTransactionCurrency (underlyingPaymentStreamMaximumTransactionCurrency) {
  this.message = underlyingPaymentStreamMaximumTransactionCurrency;
}

UnderlyingPaymentStreamMaximumTransactionCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMaximumTransactionCurrency.Tag = '41903';

UnderlyingPaymentStreamMaximumTransactionCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamMaximumTransactionCurrency;