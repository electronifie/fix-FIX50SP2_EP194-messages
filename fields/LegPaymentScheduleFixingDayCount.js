var invert = require('invert-obj');

function LegPaymentScheduleFixingDayCount (legPaymentScheduleFixingDayCount) {
  this.message = legPaymentScheduleFixingDayCount;
}

LegPaymentScheduleFixingDayCount.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDayCount.Tag = '41544';

LegPaymentScheduleFixingDayCount.Type = 'INT';

module.exports = LegPaymentScheduleFixingDayCount;