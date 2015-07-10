var invert = require('invert-obj');

function PaymentStubIndexCapRateSellSide (paymentStubIndexCapRateSellSide) {
  this.message = paymentStubIndexCapRateSellSide;
}

PaymentStubIndexCapRateSellSide.prototype.value = function () {
  return this.message;
};

PaymentStubIndexCapRateSellSide.Tag = '40888';

PaymentStubIndexCapRateSellSide.Type = 'INT';

module.exports = PaymentStubIndexCapRateSellSide;