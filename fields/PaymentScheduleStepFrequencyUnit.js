var invert = require('invert-obj');

function PaymentScheduleStepFrequencyUnit (paymentScheduleStepFrequencyUnit) {
  this.message = paymentScheduleStepFrequencyUnit;
}

PaymentScheduleStepFrequencyUnit.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepFrequencyUnit.Tag = '40845';

PaymentScheduleStepFrequencyUnit.Type = 'STRING';

module.exports = PaymentScheduleStepFrequencyUnit;