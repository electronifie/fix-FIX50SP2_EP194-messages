var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDatesOffsetDayType (paymentScheduleInterimExchangeDatesOffsetDayType) {
  this.message = paymentScheduleInterimExchangeDatesOffsetDayType;
}

PaymentScheduleInterimExchangeDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDatesOffsetDayType.Tag = '40866';

PaymentScheduleInterimExchangeDatesOffsetDayType.Type = 'INT';

module.exports = PaymentScheduleInterimExchangeDatesOffsetDayType;