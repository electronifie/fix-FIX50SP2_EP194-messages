var invert = require('invert-obj');

function UnderlyingPaymentStubIndexRateMultiplier (underlyingPaymentStubIndexRateMultiplier) {
  this.message = underlyingPaymentStubIndexRateMultiplier;
}

UnderlyingPaymentStubIndexRateMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexRateMultiplier.Tag = '40718';

UnderlyingPaymentStubIndexRateMultiplier.Type = 'FLOAT';

module.exports = UnderlyingPaymentStubIndexRateMultiplier;