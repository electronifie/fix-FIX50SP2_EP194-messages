var invert = require('invert-obj');

function UnderlyingPaymentStubIndexCapRateBuySide (underlyingPaymentStubIndexCapRateBuySide) {
  this.message = underlyingPaymentStubIndexCapRateBuySide;
}

UnderlyingPaymentStubIndexCapRateBuySide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexCapRateBuySide.Tag = '40723';

UnderlyingPaymentStubIndexCapRateBuySide.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexCapRateBuySide;