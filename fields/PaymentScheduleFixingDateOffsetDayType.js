var invert = require('invert-obj');

function PaymentScheduleFixingDateOffsetDayType (paymentScheduleFixingDateOffsetDayType) {
  this.message = paymentScheduleFixingDateOffsetDayType;
}

PaymentScheduleFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateOffsetDayType.Tag = '40857';

PaymentScheduleFixingDateOffsetDayType.Type = 'INT';

module.exports = PaymentScheduleFixingDateOffsetDayType;