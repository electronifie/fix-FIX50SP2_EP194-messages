var invert = require('invert-obj');

function PaymentStubIndex2RateMultiplier (paymentStubIndex2RateMultiplier) {
  this.message = paymentStubIndex2RateMultiplier;
}

PaymentStubIndex2RateMultiplier.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2RateMultiplier.Tag = '40896';

PaymentStubIndex2RateMultiplier.Type = 'FLOAT';

module.exports = PaymentStubIndex2RateMultiplier;