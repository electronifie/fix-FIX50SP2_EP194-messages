var invert = require('invert-obj');

function PaymentScheduleStepRate (paymentScheduleStepRate) {
  this.message = paymentScheduleStepRate;
}

PaymentScheduleStepRate.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepRate.Tag = '40847';

PaymentScheduleStepRate.Type = 'PERCENTAGE';

module.exports = PaymentScheduleStepRate;