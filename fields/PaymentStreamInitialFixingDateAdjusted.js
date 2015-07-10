var invert = require('invert-obj');

function PaymentStreamInitialFixingDateAdjusted (paymentStreamInitialFixingDateAdjusted) {
  this.message = paymentStreamInitialFixingDateAdjusted;
}

PaymentStreamInitialFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateAdjusted.Tag = '40773';

PaymentStreamInitialFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamInitialFixingDateAdjusted;