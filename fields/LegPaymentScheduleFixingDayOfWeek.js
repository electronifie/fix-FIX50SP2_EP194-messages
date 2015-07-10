var invert = require('invert-obj');

function LegPaymentScheduleFixingDayOfWeek (legPaymentScheduleFixingDayOfWeek) {
  this.message = legPaymentScheduleFixingDayOfWeek;
}

LegPaymentScheduleFixingDayOfWeek.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDayOfWeek.Tag = '41531';

LegPaymentScheduleFixingDayOfWeek.Type = 'INT';

module.exports = LegPaymentScheduleFixingDayOfWeek;