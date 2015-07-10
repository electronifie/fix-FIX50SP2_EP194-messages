var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesOffsetDayType (legPaymentStreamNonDeliverableFixingDatesOffsetDayType) {
  this.message = legPaymentStreamNonDeliverableFixingDatesOffsetDayType;
}

LegPaymentStreamNonDeliverableFixingDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag = '40365';

LegPaymentStreamNonDeliverableFixingDatesOffsetDayType.Type = 'INT';

module.exports = LegPaymentStreamNonDeliverableFixingDatesOffsetDayType;