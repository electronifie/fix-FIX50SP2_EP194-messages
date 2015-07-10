var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesOffsetDayType (paymentStreamNonDeliverableFixingDatesOffsetDayType) {
  this.message = paymentStreamNonDeliverableFixingDatesOffsetDayType;
}

PaymentStreamNonDeliverableFixingDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag = '40823';

PaymentStreamNonDeliverableFixingDatesOffsetDayType.Type = 'INT';

module.exports = PaymentStreamNonDeliverableFixingDatesOffsetDayType;