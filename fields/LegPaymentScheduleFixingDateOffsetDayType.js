var invert = require('invert-obj');

function LegPaymentScheduleFixingDateOffsetDayType (legPaymentScheduleFixingDateOffsetDayType) {
  this.message = legPaymentScheduleFixingDateOffsetDayType;
}

LegPaymentScheduleFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateOffsetDayType.Tag = '40403';

LegPaymentScheduleFixingDateOffsetDayType.Type = 'INT';

module.exports = LegPaymentScheduleFixingDateOffsetDayType;