var invert = require('invert-obj');

function PaymentScheduleFixingDayCount (paymentScheduleFixingDayCount) {
  this.message = paymentScheduleFixingDayCount;
}

PaymentScheduleFixingDayCount.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDayCount.Tag = '41175';

PaymentScheduleFixingDayCount.Type = 'INT';

module.exports = PaymentScheduleFixingDayCount;