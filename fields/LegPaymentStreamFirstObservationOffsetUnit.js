var invert = require('invert-obj');

function LegPaymentStreamFirstObservationOffsetUnit (legPaymentStreamFirstObservationOffsetUnit) {
  this.message = legPaymentStreamFirstObservationOffsetUnit;
}

LegPaymentStreamFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFirstObservationOffsetUnit.Tag = '41581';

LegPaymentStreamFirstObservationOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamFirstObservationOffsetUnit;