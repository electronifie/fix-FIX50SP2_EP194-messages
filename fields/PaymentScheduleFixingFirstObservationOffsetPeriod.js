var invert = require('invert-obj');

function PaymentScheduleFixingFirstObservationOffsetPeriod (paymentScheduleFixingFirstObservationOffsetPeriod) {
  this.message = paymentScheduleFixingFirstObservationOffsetPeriod;
}

PaymentScheduleFixingFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingFirstObservationOffsetPeriod.Tag = '41178';

PaymentScheduleFixingFirstObservationOffsetPeriod.Type = 'INT';

module.exports = PaymentScheduleFixingFirstObservationOffsetPeriod;