var invert = require('invert-obj');

function LegPaymentScheduleStepFrequencyUnit (legPaymentScheduleStepFrequencyUnit) {
  this.message = legPaymentScheduleStepFrequencyUnit;
}

LegPaymentScheduleStepFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepFrequencyUnit.Tag = '40391';

LegPaymentScheduleStepFrequencyUnit.Type = 'STRING';

module.exports = LegPaymentScheduleStepFrequencyUnit;