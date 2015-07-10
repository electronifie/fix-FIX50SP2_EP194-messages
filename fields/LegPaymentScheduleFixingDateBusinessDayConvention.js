var invert = require('invert-obj');

function LegPaymentScheduleFixingDateBusinessDayConvention (legPaymentScheduleFixingDateBusinessDayConvention) {
  this.message = legPaymentScheduleFixingDateBusinessDayConvention;
}

LegPaymentScheduleFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateBusinessDayConvention.Tag = '40399';

LegPaymentScheduleFixingDateBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentScheduleFixingDateBusinessDayConvention;