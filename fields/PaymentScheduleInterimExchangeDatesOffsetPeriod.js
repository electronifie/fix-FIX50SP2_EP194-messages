var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDatesOffsetPeriod (paymentScheduleInterimExchangeDatesOffsetPeriod) {
  this.message = paymentScheduleInterimExchangeDatesOffsetPeriod;
}

PaymentScheduleInterimExchangeDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDatesOffsetPeriod.Tag = '40864';

PaymentScheduleInterimExchangeDatesOffsetPeriod.Type = 'INT';

module.exports = PaymentScheduleInterimExchangeDatesOffsetPeriod;