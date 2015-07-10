var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDatesBusinessDayConvention (paymentScheduleInterimExchangeDatesBusinessDayConvention) {
  this.message = paymentScheduleInterimExchangeDatesBusinessDayConvention;
}

PaymentScheduleInterimExchangeDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag = '40862';

PaymentScheduleInterimExchangeDatesBusinessDayConvention.Type = 'INT';

module.exports = PaymentScheduleInterimExchangeDatesBusinessDayConvention;