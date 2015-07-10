var invert = require('invert-obj');

function LegPaymentScheduleFixingTime (legPaymentScheduleFixingTime) {
  this.message = legPaymentScheduleFixingTime;
}

LegPaymentScheduleFixingTime.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingTime.Tag = '40405';

LegPaymentScheduleFixingTime.Type = 'LOCALMKTTIME';

module.exports = LegPaymentScheduleFixingTime;