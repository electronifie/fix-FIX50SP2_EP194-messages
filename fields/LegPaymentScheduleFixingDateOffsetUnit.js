var invert = require('invert-obj');

function LegPaymentScheduleFixingDateOffsetUnit (legPaymentScheduleFixingDateOffsetUnit) {
  this.message = legPaymentScheduleFixingDateOffsetUnit;
}

LegPaymentScheduleFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateOffsetUnit.Tag = '40402';

LegPaymentScheduleFixingDateOffsetUnit.Type = 'STRING';

module.exports = LegPaymentScheduleFixingDateOffsetUnit;