var invert = require('invert-obj');

function LegPaymentSchedulePaySide (legPaymentSchedulePaySide) {
  this.message = legPaymentSchedulePaySide;
}

LegPaymentSchedulePaySide.prototype.value = function () {
  return this.message;
};

LegPaymentSchedulePaySide.Tag = '40379';

LegPaymentSchedulePaySide.Type = 'INT';

module.exports = LegPaymentSchedulePaySide;