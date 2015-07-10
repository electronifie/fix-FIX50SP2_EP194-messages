var invert = require('invert-obj');

function PaymentStubRate (paymentStubRate) {
  this.message = paymentStubRate;
}

PaymentStubRate.prototype.value = function () {
  return this.message;
};

PaymentStubRate.Tag = '40875';

PaymentStubRate.Type = 'PERCENTAGE';

module.exports = PaymentStubRate;