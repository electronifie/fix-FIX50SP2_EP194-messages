var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod (underlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag = '40652';

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod;