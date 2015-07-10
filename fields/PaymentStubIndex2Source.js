var invert = require('invert-obj');

function PaymentStubIndex2Source (paymentStubIndex2Source) {
  this.message = paymentStubIndex2Source;
}

PaymentStubIndex2Source.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2Source.Tag = '40893';

PaymentStubIndex2Source.Type = 'INT';

module.exports = PaymentStubIndex2Source;