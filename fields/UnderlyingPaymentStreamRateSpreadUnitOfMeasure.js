var invert = require('invert-obj');

function UnderlyingPaymentStreamRateSpreadUnitOfMeasure (underlyingPaymentStreamRateSpreadUnitOfMeasure) {
  this.message = underlyingPaymentStreamRateSpreadUnitOfMeasure;
}

UnderlyingPaymentStreamRateSpreadUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateSpreadUnitOfMeasure.Tag = '41921';

UnderlyingPaymentStreamRateSpreadUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateSpreadUnitOfMeasure;