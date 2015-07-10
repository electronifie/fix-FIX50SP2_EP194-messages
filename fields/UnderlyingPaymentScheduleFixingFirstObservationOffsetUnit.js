var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit (underlyingPaymentScheduleFixingFirstObservationOffsetUnit) {
  this.message = underlyingPaymentScheduleFixingFirstObservationOffsetUnit;
}

UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit.Tag = '41896';

UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit;