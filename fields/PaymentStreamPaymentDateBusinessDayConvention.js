var invert = require('invert-obj');

function PaymentStreamPaymentDateBusinessDayConvention (paymentStreamPaymentDateBusinessDayConvention) {
  this.message = paymentStreamPaymentDateBusinessDayConvention;
}

PaymentStreamPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentDateBusinessDayConvention.Tag = '40751';

PaymentStreamPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamPaymentDateBusinessDayConvention;