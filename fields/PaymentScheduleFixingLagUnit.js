var invert = require('invert-obj');

function PaymentScheduleFixingLagUnit (paymentScheduleFixingLagUnit) {
  this.message = paymentScheduleFixingLagUnit;
}

PaymentScheduleFixingLagUnit.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingLagUnit.Tag = '41177';

PaymentScheduleFixingLagUnit.Type = 'STRING';

module.exports = PaymentScheduleFixingLagUnit;