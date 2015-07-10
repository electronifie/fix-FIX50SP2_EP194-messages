var invert = require('invert-obj');

function LegPaymentScheduleFixedAmount (legPaymentScheduleFixedAmount) {
  this.message = legPaymentScheduleFixedAmount;
}

LegPaymentScheduleFixedAmount.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixedAmount.Tag = '40388';

LegPaymentScheduleFixedAmount.Type = 'AMT';

module.exports = LegPaymentScheduleFixedAmount;