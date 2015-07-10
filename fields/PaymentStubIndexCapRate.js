var invert = require('invert-obj');

function PaymentStubIndexCapRate (paymentStubIndexCapRate) {
  this.message = paymentStubIndexCapRate;
}

PaymentStubIndexCapRate.prototype.value = function () {
  return this.message;
};

PaymentStubIndexCapRate.Tag = '40886';

PaymentStubIndexCapRate.Type = 'PERCENTAGE';

module.exports = PaymentStubIndexCapRate;