var invert = require('invert-obj');

function PaymentStreamRateIndexUnitOfMeasure (paymentStreamRateIndexUnitOfMeasure) {
  this.message = paymentStreamRateIndexUnitOfMeasure;
}

PaymentStreamRateIndexUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexUnitOfMeasure.Tag = '41198';

PaymentStreamRateIndexUnitOfMeasure.Type = 'STRING';

module.exports = PaymentStreamRateIndexUnitOfMeasure;