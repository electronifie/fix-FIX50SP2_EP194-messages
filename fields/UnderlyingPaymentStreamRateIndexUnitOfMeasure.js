var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexUnitOfMeasure (underlyingPaymentStreamRateIndexUnitOfMeasure) {
  this.message = underlyingPaymentStreamRateIndexUnitOfMeasure;
}

UnderlyingPaymentStreamRateIndexUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexUnitOfMeasure.Tag = '41915';

UnderlyingPaymentStreamRateIndexUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateIndexUnitOfMeasure;