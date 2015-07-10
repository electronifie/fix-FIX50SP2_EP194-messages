var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesOffsetUnit (legPaymentStreamNonDeliverableFixingDatesOffsetUnit) {
  this.message = legPaymentStreamNonDeliverableFixingDatesOffsetUnit;
}

LegPaymentStreamNonDeliverableFixingDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag = '40364';

LegPaymentStreamNonDeliverableFixingDatesOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamNonDeliverableFixingDatesOffsetUnit;