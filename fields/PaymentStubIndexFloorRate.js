var invert = require('invert-obj');

function PaymentStubIndexFloorRate (paymentStubIndexFloorRate) {
  this.message = paymentStubIndexFloorRate;
}

PaymentStubIndexFloorRate.prototype.value = function () {
  return this.message;
};

PaymentStubIndexFloorRate.Tag = '40889';

PaymentStubIndexFloorRate.Type = 'PERCENTAGE';

module.exports = PaymentStubIndexFloorRate;