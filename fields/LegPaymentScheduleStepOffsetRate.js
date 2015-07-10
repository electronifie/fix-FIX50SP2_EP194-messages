var invert = require('invert-obj');

function LegPaymentScheduleStepOffsetRate (legPaymentScheduleStepOffsetRate) {
  this.message = legPaymentScheduleStepOffsetRate;
}

LegPaymentScheduleStepOffsetRate.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepOffsetRate.Tag = '40394';

LegPaymentScheduleStepOffsetRate.Type = 'PERCENTAGE';

module.exports = LegPaymentScheduleStepOffsetRate;