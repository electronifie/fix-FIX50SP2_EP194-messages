var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDatesBusinessCenter (paymentScheduleInterimExchangeDatesBusinessCenter) {
  this.message = paymentScheduleInterimExchangeDatesBusinessCenter;
}

PaymentScheduleInterimExchangeDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDatesBusinessCenter.Tag = '40863';

PaymentScheduleInterimExchangeDatesBusinessCenter.Type = 'STRING';

module.exports = PaymentScheduleInterimExchangeDatesBusinessCenter;