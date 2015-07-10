var invert = require('invert-obj');

function PaymentScheduleFixingDayOfWeek (paymentScheduleFixingDayOfWeek) {
  this.message = paymentScheduleFixingDayOfWeek;
}

PaymentScheduleFixingDayOfWeek.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDayOfWeek.Tag = '41162';

PaymentScheduleFixingDayOfWeek.Type = 'INT';

module.exports = PaymentScheduleFixingDayOfWeek;