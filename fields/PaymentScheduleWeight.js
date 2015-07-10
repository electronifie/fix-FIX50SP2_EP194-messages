var invert = require('invert-obj');

function PaymentScheduleWeight (paymentScheduleWeight) {
  this.message = paymentScheduleWeight;
}

PaymentScheduleWeight.prototype.value = function () {
  return this.message;
};

PaymentScheduleWeight.Tag = '40851';

PaymentScheduleWeight.Type = 'FLOAT';

module.exports = PaymentScheduleWeight;