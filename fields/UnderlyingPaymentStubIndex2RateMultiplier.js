var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2RateMultiplier (underlyingPaymentStubIndex2RateMultiplier) {
  this.message = underlyingPaymentStubIndex2RateMultiplier;
}

UnderlyingPaymentStubIndex2RateMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2RateMultiplier.Tag = '40732';

UnderlyingPaymentStubIndex2RateMultiplier.Type = 'FLOAT';

module.exports = UnderlyingPaymentStubIndex2RateMultiplier;