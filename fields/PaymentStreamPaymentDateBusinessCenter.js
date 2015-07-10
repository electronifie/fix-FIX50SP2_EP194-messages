var invert = require('invert-obj');

function PaymentStreamPaymentDateBusinessCenter (paymentStreamPaymentDateBusinessCenter) {
  this.message = paymentStreamPaymentDateBusinessCenter;
}

PaymentStreamPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentDateBusinessCenter.Tag = '40752';

PaymentStreamPaymentDateBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamPaymentDateBusinessCenter;