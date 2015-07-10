var invert = require('invert-obj');

function PaymentScheduleFixedAmount (paymentScheduleFixedAmount) {
  this.message = paymentScheduleFixedAmount;
}

PaymentScheduleFixedAmount.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixedAmount.Tag = '40842';

PaymentScheduleFixedAmount.Type = 'AMT';

module.exports = PaymentScheduleFixedAmount;