var invert = require('invert-obj');

function UnderlyingPaymentStubIndexFloorRateSellSide (underlyingPaymentStubIndexFloorRateSellSide) {
  this.message = underlyingPaymentStubIndexFloorRateSellSide;
}

UnderlyingPaymentStubIndexFloorRateSellSide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexFloorRateSellSide.Tag = '40727';

UnderlyingPaymentStubIndexFloorRateSellSide.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexFloorRateSellSide;