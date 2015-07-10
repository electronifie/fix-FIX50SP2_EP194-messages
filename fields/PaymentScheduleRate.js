var invert = require('invert-obj');

function PaymentScheduleRate (paymentScheduleRate) {
  this.message = paymentScheduleRate;
}

PaymentScheduleRate.prototype.value = function () {
  return this.message;
};

PaymentScheduleRate.Tag = '40837';

PaymentScheduleRate.Type = 'PERCENTAGE';

module.exports = PaymentScheduleRate;