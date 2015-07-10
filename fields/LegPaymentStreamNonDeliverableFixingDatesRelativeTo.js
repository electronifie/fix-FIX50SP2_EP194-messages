var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesRelativeTo (legPaymentStreamNonDeliverableFixingDatesRelativeTo) {
  this.message = legPaymentStreamNonDeliverableFixingDatesRelativeTo;
}

LegPaymentStreamNonDeliverableFixingDatesRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesRelativeTo.Tag = '40362';

LegPaymentStreamNonDeliverableFixingDatesRelativeTo.Type = 'INT';

module.exports = LegPaymentStreamNonDeliverableFixingDatesRelativeTo;