var invert = require('invert-obj');

function PaymentStubIndexCapRateBuySide (paymentStubIndexCapRateBuySide) {
  this.message = paymentStubIndexCapRateBuySide;
}

PaymentStubIndexCapRateBuySide.prototype.value = function () {
  return this.message;
};

PaymentStubIndexCapRateBuySide.Tag = '40887';

PaymentStubIndexCapRateBuySide.Type = 'INT';

module.exports = PaymentStubIndexCapRateBuySide;