var invert = require('invert-obj');

function PaymentScheduleStepOffsetRate (paymentScheduleStepOffsetRate) {
  this.message = paymentScheduleStepOffsetRate;
}

PaymentScheduleStepOffsetRate.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepOffsetRate.Tag = '40848';

PaymentScheduleStepOffsetRate.Type = 'PERCENTAGE';

module.exports = PaymentScheduleStepOffsetRate;