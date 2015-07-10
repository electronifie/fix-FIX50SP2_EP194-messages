var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit (underlyingPaymentScheduleInterimExchangeDatesOffsetUnit) {
  this.message = underlyingPaymentScheduleInterimExchangeDatesOffsetUnit;
}

UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit.Tag = '40701';

UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit;