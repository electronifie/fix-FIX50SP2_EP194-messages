var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDatesOffsetUnit (paymentScheduleInterimExchangeDatesOffsetUnit) {
  this.message = paymentScheduleInterimExchangeDatesOffsetUnit;
}

PaymentScheduleInterimExchangeDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDatesOffsetUnit.Tag = '40865';

PaymentScheduleInterimExchangeDatesOffsetUnit.Type = 'STRING';

module.exports = PaymentScheduleInterimExchangeDatesOffsetUnit;