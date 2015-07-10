var invert = require('invert-obj');

function PaymentStreamFirstObservationOffsetUnit (paymentStreamFirstObservationOffsetUnit) {
  this.message = paymentStreamFirstObservationOffsetUnit;
}

PaymentStreamFirstObservationOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamFirstObservationOffsetUnit.Tag = '41212';

PaymentStreamFirstObservationOffsetUnit.Type = 'STRING';

module.exports = PaymentStreamFirstObservationOffsetUnit;