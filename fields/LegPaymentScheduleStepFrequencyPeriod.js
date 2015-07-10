var invert = require('invert-obj');

function LegPaymentScheduleStepFrequencyPeriod (legPaymentScheduleStepFrequencyPeriod) {
  this.message = legPaymentScheduleStepFrequencyPeriod;
}

LegPaymentScheduleStepFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepFrequencyPeriod.Tag = '40390';

LegPaymentScheduleStepFrequencyPeriod.Type = 'INT';

module.exports = LegPaymentScheduleStepFrequencyPeriod;