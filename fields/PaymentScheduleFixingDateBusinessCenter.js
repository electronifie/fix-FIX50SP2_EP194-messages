var invert = require('invert-obj');

function PaymentScheduleFixingDateBusinessCenter (paymentScheduleFixingDateBusinessCenter) {
  this.message = paymentScheduleFixingDateBusinessCenter;
}

PaymentScheduleFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateBusinessCenter.Tag = '40854';

PaymentScheduleFixingDateBusinessCenter.Type = 'STRING';

module.exports = PaymentScheduleFixingDateBusinessCenter;