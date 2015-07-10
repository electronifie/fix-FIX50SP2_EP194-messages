var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesOffsetPeriod (paymentStreamNonDeliverableFixingDatesOffsetPeriod) {
  this.message = paymentStreamNonDeliverableFixingDatesOffsetPeriod;
}

PaymentStreamNonDeliverableFixingDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag = '40821';

PaymentStreamNonDeliverableFixingDatesOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamNonDeliverableFixingDatesOffsetPeriod;