var invert = require('invert-obj');

function PaymentStubIndexFloorRateSellSide (paymentStubIndexFloorRateSellSide) {
  this.message = paymentStubIndexFloorRateSellSide;
}

PaymentStubIndexFloorRateSellSide.prototype.value = function () {
  return this.message;
};

PaymentStubIndexFloorRateSellSide.Tag = '40891';

PaymentStubIndexFloorRateSellSide.Type = 'INT';

module.exports = PaymentStubIndexFloorRateSellSide;