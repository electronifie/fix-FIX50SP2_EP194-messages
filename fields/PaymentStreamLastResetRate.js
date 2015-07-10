var invert = require('invert-obj');

function PaymentStreamLastResetRate (paymentStreamLastResetRate) {
  this.message = paymentStreamLastResetRate;
}

PaymentStreamLastResetRate.prototype.value = function () {
  return this.message;
};

PaymentStreamLastResetRate.Tag = '41207';

PaymentStreamLastResetRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamLastResetRate;