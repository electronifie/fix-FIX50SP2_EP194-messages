var invert = require('invert-obj');

function PaymentStreamResetFrequencyPeriod (paymentStreamResetFrequencyPeriod) {
  this.message = paymentStreamResetFrequencyPeriod;
}

PaymentStreamResetFrequencyPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamResetFrequencyPeriod.Tag = '40764';

PaymentStreamResetFrequencyPeriod.Type = 'INT';

module.exports = PaymentStreamResetFrequencyPeriod;