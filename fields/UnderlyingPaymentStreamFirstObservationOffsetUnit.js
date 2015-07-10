var invert = require('invert-obj');

function UnderlyingPaymentStreamFirstObservationOffsetUnit (underlyingPaymentStreamFirstObservationOffsetUnit) {
  this.message = underlyingPaymentStreamFirstObservationOffsetUnit;
}

UnderlyingPaymentStreamFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFirstObservationOffsetUnit.Tag = '41929';

UnderlyingPaymentStreamFirstObservationOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamFirstObservationOffsetUnit;