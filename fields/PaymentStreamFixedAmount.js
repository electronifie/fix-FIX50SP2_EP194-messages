var invert = require('invert-obj');

function PaymentStreamFixedAmount (paymentStreamFixedAmount) {
  this.message = paymentStreamFixedAmount;
}

PaymentStreamFixedAmount.prototype.value = function () {
  return this.message;
};

PaymentStreamFixedAmount.Tag = '40785';

PaymentStreamFixedAmount.Type = 'AMT';

module.exports = PaymentStreamFixedAmount;