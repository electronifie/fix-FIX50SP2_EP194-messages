var invert = require('invert-obj');

function PaymentStreamRateSpreadUnitOfMeasure (paymentStreamRateSpreadUnitOfMeasure) {
  this.message = paymentStreamRateSpreadUnitOfMeasure;
}

PaymentStreamRateSpreadUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentStreamRateSpreadUnitOfMeasure.Tag = '41204';

PaymentStreamRateSpreadUnitOfMeasure.Type = 'STRING';

module.exports = PaymentStreamRateSpreadUnitOfMeasure;