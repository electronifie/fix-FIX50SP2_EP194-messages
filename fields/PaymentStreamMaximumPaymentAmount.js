var invert = require('invert-obj');

function PaymentStreamMaximumPaymentAmount (paymentStreamMaximumPaymentAmount) {
  this.message = paymentStreamMaximumPaymentAmount;
}

PaymentStreamMaximumPaymentAmount.prototype.value = function () {
  return this.message;
};

PaymentStreamMaximumPaymentAmount.Tag = '41183';

PaymentStreamMaximumPaymentAmount.Type = 'AMT';

module.exports = PaymentStreamMaximumPaymentAmount;