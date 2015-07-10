var invert = require('invert-obj');

function PaymentScheduleFixingDayNumber (paymentScheduleFixingDayNumber) {
  this.message = paymentScheduleFixingDayNumber;
}

PaymentScheduleFixingDayNumber.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDayNumber.Tag = '41163';

PaymentScheduleFixingDayNumber.Type = 'INT';

module.exports = PaymentScheduleFixingDayNumber;