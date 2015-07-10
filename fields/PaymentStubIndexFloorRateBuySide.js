var invert = require('invert-obj');

function PaymentStubIndexFloorRateBuySide (paymentStubIndexFloorRateBuySide) {
  this.message = paymentStubIndexFloorRateBuySide;
}

PaymentStubIndexFloorRateBuySide.prototype.value = function () {
  return this.message;
};

PaymentStubIndexFloorRateBuySide.Tag = '40890';

PaymentStubIndexFloorRateBuySide.Type = 'INT';

module.exports = PaymentStubIndexFloorRateBuySide;