var invert = require('invert-obj');

function LegPaymentScheduleFixingFirstObservationOffsetPeriod (legPaymentScheduleFixingFirstObservationOffsetPeriod) {
  this.message = legPaymentScheduleFixingFirstObservationOffsetPeriod;
}

LegPaymentScheduleFixingFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingFirstObservationOffsetPeriod.Tag = '41547';

LegPaymentScheduleFixingFirstObservationOffsetPeriod.Type = 'INT';

module.exports = LegPaymentScheduleFixingFirstObservationOffsetPeriod;