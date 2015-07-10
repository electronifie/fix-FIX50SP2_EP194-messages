var invert = require('invert-obj');

function UnderlyingPaymentStubIndexFloorRateBuySide (underlyingPaymentStubIndexFloorRateBuySide) {
  this.message = underlyingPaymentStubIndexFloorRateBuySide;
}

UnderlyingPaymentStubIndexFloorRateBuySide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexFloorRateBuySide.Tag = '40726';

UnderlyingPaymentStubIndexFloorRateBuySide.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexFloorRateBuySide;