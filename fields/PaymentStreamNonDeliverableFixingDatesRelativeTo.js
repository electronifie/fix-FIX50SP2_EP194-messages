var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesRelativeTo (paymentStreamNonDeliverableFixingDatesRelativeTo) {
  this.message = paymentStreamNonDeliverableFixingDatesRelativeTo;
}

PaymentStreamNonDeliverableFixingDatesRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesRelativeTo.Tag = '40820';

PaymentStreamNonDeliverableFixingDatesRelativeTo.Type = 'INT';

module.exports = PaymentStreamNonDeliverableFixingDatesRelativeTo;