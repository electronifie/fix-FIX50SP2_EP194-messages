var invert = require('invert-obj');

function PaymentStubIndexSource (paymentStubIndexSource) {
  this.message = paymentStubIndexSource;
}

PaymentStubIndexSource.prototype.value = function () {
  return this.message;
};

PaymentStubIndexSource.Tag = '40879';

PaymentStubIndexSource.Type = 'INT';

module.exports = PaymentStubIndexSource;