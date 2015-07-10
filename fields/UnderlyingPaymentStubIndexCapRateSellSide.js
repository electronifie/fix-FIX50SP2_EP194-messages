var invert = require('invert-obj');

function UnderlyingPaymentStubIndexCapRateSellSide (underlyingPaymentStubIndexCapRateSellSide) {
  this.message = underlyingPaymentStubIndexCapRateSellSide;
}

UnderlyingPaymentStubIndexCapRateSellSide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexCapRateSellSide.Tag = '40724';

UnderlyingPaymentStubIndexCapRateSellSide.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexCapRateSellSide;