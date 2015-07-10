var invert = require('invert-obj');

function PaymentStreamPaymentDate (paymentStreamPaymentDate) {
  this.message = paymentStreamPaymentDate;
}

PaymentStreamPaymentDate.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentDate.Tag = '41221';

PaymentStreamPaymentDate.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamPaymentDate;