var invert = require('invert-obj');

function LegPaymentScheduleFixingLagUnit (legPaymentScheduleFixingLagUnit) {
  this.message = legPaymentScheduleFixingLagUnit;
}

LegPaymentScheduleFixingLagUnit.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingLagUnit.Tag = '41546';

LegPaymentScheduleFixingLagUnit.Type = 'STRING';

module.exports = LegPaymentScheduleFixingLagUnit;