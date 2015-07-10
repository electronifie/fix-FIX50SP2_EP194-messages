var invert = require('invert-obj');

function PaymentStreamDelayIndicator (paymentStreamDelayIndicator) {
  this.message = paymentStreamDelayIndicator;
}

PaymentStreamDelayIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamDelayIndicator.Tag = '40740';

PaymentStreamDelayIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamDelayIndicator;