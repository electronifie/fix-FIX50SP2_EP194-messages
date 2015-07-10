var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixedAmount (underlyingPaymentScheduleFixedAmount) {
  this.message = underlyingPaymentScheduleFixedAmount;
}

UnderlyingPaymentScheduleFixedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixedAmount.Tag = '40678';

UnderlyingPaymentScheduleFixedAmount.Type = 'AMT';

module.exports = UnderlyingPaymentScheduleFixedAmount;