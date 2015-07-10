var invert = require('invert-obj');

function LegPaymentScheduleStepRate (legPaymentScheduleStepRate) {
  this.message = legPaymentScheduleStepRate;
}

LegPaymentScheduleStepRate.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepRate.Tag = '40393';

LegPaymentScheduleStepRate.Type = 'PERCENTAGE';

module.exports = LegPaymentScheduleStepRate;