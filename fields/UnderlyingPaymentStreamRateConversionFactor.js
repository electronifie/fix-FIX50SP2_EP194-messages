var invert = require('invert-obj');

function UnderlyingPaymentStreamRateConversionFactor (underlyingPaymentStreamRateConversionFactor) {
  this.message = underlyingPaymentStreamRateConversionFactor;
}

UnderlyingPaymentStreamRateConversionFactor.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateConversionFactor.Tag = '41922';

UnderlyingPaymentStreamRateConversionFactor.Type = 'FLOAT';

module.exports = UnderlyingPaymentStreamRateConversionFactor;