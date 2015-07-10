var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention (underlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention) {
  this.message = underlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention;
}

UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag = '40698';

UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention;