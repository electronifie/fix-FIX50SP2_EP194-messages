var invert = require('invert-obj');

function PaymentDateAdjusted (paymentDateAdjusted) {
  this.message = paymentDateAdjusted;
}

PaymentDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentDateAdjusted.Tag = '40222';

PaymentDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentDateAdjusted;