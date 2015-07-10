var invert = require('invert-obj');

function LegPaymentStreamFirstObservationOffsetPeriod (legPaymentStreamFirstObservationOffsetPeriod) {
  this.message = legPaymentStreamFirstObservationOffsetPeriod;
}

LegPaymentStreamFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFirstObservationOffsetPeriod.Tag = '41580';

LegPaymentStreamFirstObservationOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamFirstObservationOffsetPeriod;