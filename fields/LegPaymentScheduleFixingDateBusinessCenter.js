var invert = require('invert-obj');

function LegPaymentScheduleFixingDateBusinessCenter (legPaymentScheduleFixingDateBusinessCenter) {
  this.message = legPaymentScheduleFixingDateBusinessCenter;
}

LegPaymentScheduleFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateBusinessCenter.Tag = '40400';

LegPaymentScheduleFixingDateBusinessCenter.Type = 'STRING';

module.exports = LegPaymentScheduleFixingDateBusinessCenter;