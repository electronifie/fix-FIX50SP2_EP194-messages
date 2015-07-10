var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesBusinessCenter (legPaymentStreamNonDeliverableFixingDatesBusinessCenter) {
  this.message = legPaymentStreamNonDeliverableFixingDatesBusinessCenter;
}

LegPaymentStreamNonDeliverableFixingDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag = '40361';

LegPaymentStreamNonDeliverableFixingDatesBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamNonDeliverableFixingDatesBusinessCenter;