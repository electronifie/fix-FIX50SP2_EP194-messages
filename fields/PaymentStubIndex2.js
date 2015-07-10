var invert = require('invert-obj');

function PaymentStubIndex2 (paymentStubIndex2) {
  this.message = paymentStubIndex2;
}

PaymentStubIndex2.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2.Tag = '40892';

PaymentStubIndex2.Type = 'STRING';

module.exports = PaymentStubIndex2;