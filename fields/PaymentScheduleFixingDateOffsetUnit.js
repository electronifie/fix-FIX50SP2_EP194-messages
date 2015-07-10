var invert = require('invert-obj');

function PaymentScheduleFixingDateOffsetUnit (paymentScheduleFixingDateOffsetUnit) {
  this.message = paymentScheduleFixingDateOffsetUnit;
}

PaymentScheduleFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateOffsetUnit.Tag = '40856';

PaymentScheduleFixingDateOffsetUnit.Type = 'STRING';

module.exports = PaymentScheduleFixingDateOffsetUnit;