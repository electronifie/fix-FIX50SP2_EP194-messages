var invert = require('invert-obj');

function PaymentScheduleFixingDateRelativeTo (paymentScheduleFixingDateRelativeTo) {
  this.message = paymentScheduleFixingDateRelativeTo;
}

PaymentScheduleFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateRelativeTo.Tag = '40852';

PaymentScheduleFixingDateRelativeTo.Type = 'INT';

module.exports = PaymentScheduleFixingDateRelativeTo;