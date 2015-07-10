var invert = require('invert-obj');

function PaymentStreamRateConversionFactor (paymentStreamRateConversionFactor) {
  this.message = paymentStreamRateConversionFactor;
}

PaymentStreamRateConversionFactor.prototype.value = function () {
  return this.message;
};

PaymentStreamRateConversionFactor.Tag = '41205';

PaymentStreamRateConversionFactor.Type = 'FLOAT';

module.exports = PaymentStreamRateConversionFactor;