var invert = require('invert-obj');

function PaymentStreamMaximumTransactionAmount (paymentStreamMaximumTransactionAmount) {
  this.message = paymentStreamMaximumTransactionAmount;
}

PaymentStreamMaximumTransactionAmount.prototype.value = function () {
  return this.message;
};

PaymentStreamMaximumTransactionAmount.Tag = '41185';

PaymentStreamMaximumTransactionAmount.Type = 'AMT';

module.exports = PaymentStreamMaximumTransactionAmount;