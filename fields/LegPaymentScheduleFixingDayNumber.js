var invert = require('invert-obj');

function LegPaymentScheduleFixingDayNumber (legPaymentScheduleFixingDayNumber) {
  this.message = legPaymentScheduleFixingDayNumber;
}

LegPaymentScheduleFixingDayNumber.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDayNumber.Tag = '41532';

LegPaymentScheduleFixingDayNumber.Type = 'INT';

module.exports = LegPaymentScheduleFixingDayNumber;