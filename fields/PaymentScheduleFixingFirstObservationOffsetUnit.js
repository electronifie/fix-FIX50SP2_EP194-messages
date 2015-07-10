var invert = require('invert-obj');

function PaymentScheduleFixingFirstObservationOffsetUnit (paymentScheduleFixingFirstObservationOffsetUnit) {
  this.message = paymentScheduleFixingFirstObservationOffsetUnit;
}

PaymentScheduleFixingFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingFirstObservationOffsetUnit.Tag = '41179';

PaymentScheduleFixingFirstObservationOffsetUnit.Type = 'STRING';

module.exports = PaymentScheduleFixingFirstObservationOffsetUnit;