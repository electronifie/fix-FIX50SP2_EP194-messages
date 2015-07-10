var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangePaymentDateRelativeTo (legPaymentScheduleInterimExchangePaymentDateRelativeTo) {
  this.message = legPaymentScheduleInterimExchangePaymentDateRelativeTo;
}

LegPaymentScheduleInterimExchangePaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangePaymentDateRelativeTo.Tag = '40407';

LegPaymentScheduleInterimExchangePaymentDateRelativeTo.Type = 'INT';

module.exports = LegPaymentScheduleInterimExchangePaymentDateRelativeTo;