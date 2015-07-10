var invert = require('invert-obj');

function PaymentScheduleFixingDateBusinessDayConvention (paymentScheduleFixingDateBusinessDayConvention) {
  this.message = paymentScheduleFixingDateBusinessDayConvention;
}

PaymentScheduleFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateBusinessDayConvention.Tag = '40853';

PaymentScheduleFixingDateBusinessDayConvention.Type = 'INT';

module.exports = PaymentScheduleFixingDateBusinessDayConvention;