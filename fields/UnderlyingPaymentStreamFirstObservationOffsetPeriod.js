var invert = require('invert-obj');

function UnderlyingPaymentStreamFirstObservationOffsetPeriod (underlyingPaymentStreamFirstObservationOffsetPeriod) {
  this.message = underlyingPaymentStreamFirstObservationOffsetPeriod;
}

UnderlyingPaymentStreamFirstObservationOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFirstObservationOffsetPeriod.Tag = '41928';

UnderlyingPaymentStreamFirstObservationOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamFirstObservationOffsetPeriod;