var invert = require('invert-obj');

function LegPaymentScheduleFixingFirstObservationOffsetUnit (legPaymentScheduleFixingFirstObservationOffsetUnit) {
  this.message = legPaymentScheduleFixingFirstObservationOffsetUnit;
}

LegPaymentScheduleFixingFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingFirstObservationOffsetUnit.Tag = '41548';

LegPaymentScheduleFixingFirstObservationOffsetUnit.Type = 'STRING';

module.exports = LegPaymentScheduleFixingFirstObservationOffsetUnit;