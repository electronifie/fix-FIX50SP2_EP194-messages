var invert = require('invert-obj');

function PaymentScheduleStepFrequencyPeriod (paymentScheduleStepFrequencyPeriod) {
  this.message = paymentScheduleStepFrequencyPeriod;
}

PaymentScheduleStepFrequencyPeriod.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepFrequencyPeriod.Tag = '40844';

PaymentScheduleStepFrequencyPeriod.Type = 'INT';

module.exports = PaymentScheduleStepFrequencyPeriod;