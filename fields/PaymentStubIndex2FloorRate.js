var invert = require('invert-obj');

function PaymentStubIndex2FloorRate (paymentStubIndex2FloorRate) {
  this.message = paymentStubIndex2FloorRate;
}

PaymentStubIndex2FloorRate.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2FloorRate.Tag = '40901';

PaymentStubIndex2FloorRate.Type = 'PERCENTAGE';

module.exports = PaymentStubIndex2FloorRate;