var invert = require('invert-obj');

function PaymentStreamPaymentFrequencyPeriod (paymentStreamPaymentFrequencyPeriod) {
  this.message = paymentStreamPaymentFrequencyPeriod;
}

PaymentStreamPaymentFrequencyPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentFrequencyPeriod.Tag = '40753';

PaymentStreamPaymentFrequencyPeriod.Type = 'INT';

module.exports = PaymentStreamPaymentFrequencyPeriod;