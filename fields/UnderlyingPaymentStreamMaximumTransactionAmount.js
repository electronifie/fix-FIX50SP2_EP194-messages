var invert = require('invert-obj');

function UnderlyingPaymentStreamMaximumTransactionAmount (underlyingPaymentStreamMaximumTransactionAmount) {
  this.message = underlyingPaymentStreamMaximumTransactionAmount;
}

UnderlyingPaymentStreamMaximumTransactionAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMaximumTransactionAmount.Tag = '41902';

UnderlyingPaymentStreamMaximumTransactionAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStreamMaximumTransactionAmount;