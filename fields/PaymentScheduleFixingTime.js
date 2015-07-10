var invert = require('invert-obj');

function PaymentScheduleFixingTime (paymentScheduleFixingTime) {
  this.message = paymentScheduleFixingTime;
}

PaymentScheduleFixingTime.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingTime.Tag = '40859';

PaymentScheduleFixingTime.Type = 'LOCALMKTTIME';

module.exports = PaymentScheduleFixingTime;