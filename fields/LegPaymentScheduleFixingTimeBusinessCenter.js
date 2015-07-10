var invert = require('invert-obj');

function LegPaymentScheduleFixingTimeBusinessCenter (legPaymentScheduleFixingTimeBusinessCenter) {
  this.message = legPaymentScheduleFixingTimeBusinessCenter;
}

LegPaymentScheduleFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingTimeBusinessCenter.Tag = '40406';

LegPaymentScheduleFixingTimeBusinessCenter.Type = 'STRING';

module.exports = LegPaymentScheduleFixingTimeBusinessCenter;