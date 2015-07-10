var invert = require('invert-obj');

function PaymentScheduleFixingDateOffsetPeriod (paymentScheduleFixingDateOffsetPeriod) {
  this.message = paymentScheduleFixingDateOffsetPeriod;
}

PaymentScheduleFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateOffsetPeriod.Tag = '40855';

PaymentScheduleFixingDateOffsetPeriod.Type = 'INT';

module.exports = PaymentScheduleFixingDateOffsetPeriod;