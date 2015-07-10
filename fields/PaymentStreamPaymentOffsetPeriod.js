var invert = require('invert-obj');

function PaymentStreamPaymentOffsetPeriod (paymentStreamPaymentOffsetPeriod) {
  this.message = paymentStreamPaymentOffsetPeriod;
}

PaymentStreamPaymentOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentOffsetPeriod.Tag = '40759';

PaymentStreamPaymentOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamPaymentOffsetPeriod;