var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepFrequencyUnit (underlyingPaymentScheduleStepFrequencyUnit) {
  this.message = underlyingPaymentScheduleStepFrequencyUnit;
}

UnderlyingPaymentScheduleStepFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepFrequencyUnit.Tag = '40681';

UnderlyingPaymentScheduleStepFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleStepFrequencyUnit;