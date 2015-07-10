var invert = require('invert-obj');

function PaymentScheduleFixingDateAdjusted (paymentScheduleFixingDateAdjusted) {
  this.message = paymentScheduleFixingDateAdjusted;
}

PaymentScheduleFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateAdjusted.Tag = '40858';

PaymentScheduleFixingDateAdjusted.Type = 'STRING';

module.exports = PaymentScheduleFixingDateAdjusted;