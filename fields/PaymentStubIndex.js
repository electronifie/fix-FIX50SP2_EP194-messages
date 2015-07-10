var invert = require('invert-obj');

function PaymentStubIndex (paymentStubIndex) {
  this.message = paymentStubIndex;
}

PaymentStubIndex.prototype.value = function () {
  return this.message;
};

PaymentStubIndex.Tag = '40878';

PaymentStubIndex.Type = 'STRING';

module.exports = PaymentStubIndex;