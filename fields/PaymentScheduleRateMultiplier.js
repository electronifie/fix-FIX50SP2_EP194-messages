var invert = require('invert-obj');

function PaymentScheduleRateMultiplier (paymentScheduleRateMultiplier) {
  this.message = paymentScheduleRateMultiplier;
}

PaymentScheduleRateMultiplier.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateMultiplier.Tag = '40838';

PaymentScheduleRateMultiplier.Type = 'FLOAT';

module.exports = PaymentScheduleRateMultiplier;