var invert = require('invert-obj');

function PaymentStubIndexRateMultiplier (paymentStubIndexRateMultiplier) {
  this.message = paymentStubIndexRateMultiplier;
}

PaymentStubIndexRateMultiplier.prototype.value = function () {
  return this.message;
};

PaymentStubIndexRateMultiplier.Tag = '40882';

PaymentStubIndexRateMultiplier.Type = 'FLOAT';

module.exports = PaymentStubIndexRateMultiplier;