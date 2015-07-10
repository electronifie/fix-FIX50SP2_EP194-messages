var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter (underlyingPaymentScheduleInterimExchangeDatesBusinessCenter) {
  this.message = underlyingPaymentScheduleInterimExchangeDatesBusinessCenter;
}

UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter.Tag = '40699';

UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter;