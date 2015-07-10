var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo (underlyingPaymentScheduleInterimExchangePaymentDateRelativeTo) {
  this.message = underlyingPaymentScheduleInterimExchangePaymentDateRelativeTo;
}

UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo.Tag = '40697';

UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo;