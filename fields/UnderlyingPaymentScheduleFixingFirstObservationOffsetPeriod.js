var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod (underlyingPaymentScheduleFixingFirstObservationOffsetPeriod) {
  this.message = underlyingPaymentScheduleFixingFirstObservationOffsetPeriod;
}

UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod.Tag = '41895';

UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod;