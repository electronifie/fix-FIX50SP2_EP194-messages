var invert = require('invert-obj');

function PaymentStreamFirstObservationOffsetPeriod (paymentStreamFirstObservationOffsetPeriod) {
  this.message = paymentStreamFirstObservationOffsetPeriod;
}

PaymentStreamFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamFirstObservationOffsetPeriod.Tag = '41211';

PaymentStreamFirstObservationOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamFirstObservationOffsetPeriod;