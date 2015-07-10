var invert = require('invert-obj');

function PaymentStreamPaymentDateType (paymentStreamPaymentDateType) {
  this.message = paymentStreamPaymentDateType;
}

PaymentStreamPaymentDateType.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentDateType.Tag = '41222';

PaymentStreamPaymentDateType.Type = 'INT';

module.exports = PaymentStreamPaymentDateType;