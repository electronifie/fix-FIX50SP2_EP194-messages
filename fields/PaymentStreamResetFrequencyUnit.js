var invert = require('invert-obj');

function PaymentStreamResetFrequencyUnit (paymentStreamResetFrequencyUnit) {
  this.message = paymentStreamResetFrequencyUnit;
}

PaymentStreamResetFrequencyUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamResetFrequencyUnit.Tag = '40765';

PaymentStreamResetFrequencyUnit.Type = 'STRING';

module.exports = PaymentStreamResetFrequencyUnit;