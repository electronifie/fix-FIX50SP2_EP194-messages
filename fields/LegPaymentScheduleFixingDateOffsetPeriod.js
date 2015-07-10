var invert = require('invert-obj');

function LegPaymentScheduleFixingDateOffsetPeriod (legPaymentScheduleFixingDateOffsetPeriod) {
  this.message = legPaymentScheduleFixingDateOffsetPeriod;
}

LegPaymentScheduleFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateOffsetPeriod.Tag = '40401';

LegPaymentScheduleFixingDateOffsetPeriod.Type = 'INT';

module.exports = LegPaymentScheduleFixingDateOffsetPeriod;