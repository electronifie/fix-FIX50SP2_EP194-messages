var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention (legPaymentStreamNonDeliverableFixingDatesBusinessDayConvention) {
  this.message = legPaymentStreamNonDeliverableFixingDatesBusinessDayConvention;
}

LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag = '40360';

LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention;