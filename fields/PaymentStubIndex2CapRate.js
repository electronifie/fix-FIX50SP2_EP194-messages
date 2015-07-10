var invert = require('invert-obj');

function PaymentStubIndex2CapRate (paymentStubIndex2CapRate) {
  this.message = paymentStubIndex2CapRate;
}

PaymentStubIndex2CapRate.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2CapRate.Tag = '40900';

PaymentStubIndex2CapRate.Type = 'PERCENTAGE';

module.exports = PaymentStubIndex2CapRate;