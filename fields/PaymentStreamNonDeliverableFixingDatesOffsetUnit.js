var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesOffsetUnit (paymentStreamNonDeliverableFixingDatesOffsetUnit) {
  this.message = paymentStreamNonDeliverableFixingDatesOffsetUnit;
}

PaymentStreamNonDeliverableFixingDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag = '40822';

PaymentStreamNonDeliverableFixingDatesOffsetUnit.Type = 'STRING';

module.exports = PaymentStreamNonDeliverableFixingDatesOffsetUnit;