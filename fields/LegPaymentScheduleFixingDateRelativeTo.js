var invert = require('invert-obj');

function LegPaymentScheduleFixingDateRelativeTo (legPaymentScheduleFixingDateRelativeTo) {
  this.message = legPaymentScheduleFixingDateRelativeTo;
}

LegPaymentScheduleFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateRelativeTo.Tag = '40398';

LegPaymentScheduleFixingDateRelativeTo.Type = 'INT';

module.exports = LegPaymentScheduleFixingDateRelativeTo;