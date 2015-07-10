var invert = require('invert-obj');

function LegPaymentScheduleFixingDateAdjusted (legPaymentScheduleFixingDateAdjusted) {
  this.message = legPaymentScheduleFixingDateAdjusted;
}

LegPaymentScheduleFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateAdjusted.Tag = '40404';

LegPaymentScheduleFixingDateAdjusted.Type = 'STRING';

module.exports = LegPaymentScheduleFixingDateAdjusted;