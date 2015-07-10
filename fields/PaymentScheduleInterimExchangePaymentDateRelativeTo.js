var invert = require('invert-obj');

function PaymentScheduleInterimExchangePaymentDateRelativeTo (paymentScheduleInterimExchangePaymentDateRelativeTo) {
  this.message = paymentScheduleInterimExchangePaymentDateRelativeTo;
}

PaymentScheduleInterimExchangePaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangePaymentDateRelativeTo.Tag = '40861';

PaymentScheduleInterimExchangePaymentDateRelativeTo.Type = 'INT';

module.exports = PaymentScheduleInterimExchangePaymentDateRelativeTo;