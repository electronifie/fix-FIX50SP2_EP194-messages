var invert = require('invert-obj');

function PaymentStreamPaymentDateRelativeTo (paymentStreamPaymentDateRelativeTo) {
  this.message = paymentStreamPaymentDateRelativeTo;
}

PaymentStreamPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentDateRelativeTo.Tag = '40758';

PaymentStreamPaymentDateRelativeTo.Type = 'INT';

module.exports = PaymentStreamPaymentDateRelativeTo;