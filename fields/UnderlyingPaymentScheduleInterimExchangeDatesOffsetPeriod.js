var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod (underlyingPaymentScheduleInterimExchangeDatesOffsetPeriod) {
  this.message = underlyingPaymentScheduleInterimExchangeDatesOffsetPeriod;
}

UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod.Tag = '40700';

UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod;