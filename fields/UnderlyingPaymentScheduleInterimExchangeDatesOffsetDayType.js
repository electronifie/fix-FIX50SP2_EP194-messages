var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType (underlyingPaymentScheduleInterimExchangeDatesOffsetDayType) {
  this.message = underlyingPaymentScheduleInterimExchangeDatesOffsetDayType;
}

UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType.Tag = '40702';

UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType;