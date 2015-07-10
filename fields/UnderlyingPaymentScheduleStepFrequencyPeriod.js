var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepFrequencyPeriod (underlyingPaymentScheduleStepFrequencyPeriod) {
  this.message = underlyingPaymentScheduleStepFrequencyPeriod;
}

UnderlyingPaymentScheduleStepFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepFrequencyPeriod.Tag = '40680';

UnderlyingPaymentScheduleStepFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingPaymentScheduleStepFrequencyPeriod;