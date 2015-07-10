var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType (underlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag = '40654';

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType;