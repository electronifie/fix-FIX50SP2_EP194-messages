var invert = require('invert-obj');

function PaymentStreamFixingDateAdjusted (paymentStreamFixingDateAdjusted) {
  this.message = paymentStreamFixingDateAdjusted;
}

PaymentStreamFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateAdjusted.Tag = '40780';

PaymentStreamFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamFixingDateAdjusted;