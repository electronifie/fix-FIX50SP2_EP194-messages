var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod (legPaymentStreamNonDeliverableFixingDatesOffsetPeriod) {
  this.message = legPaymentStreamNonDeliverableFixingDatesOffsetPeriod;
}

LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag = '40363';

LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod;