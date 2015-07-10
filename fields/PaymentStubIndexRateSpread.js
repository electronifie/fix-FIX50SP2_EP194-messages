var invert = require('invert-obj');

function PaymentStubIndexRateSpread (paymentStubIndexRateSpread) {
  this.message = paymentStubIndexRateSpread;
}

PaymentStubIndexRateSpread.prototype.value = function () {
  return this.message;
};

PaymentStubIndexRateSpread.Tag = '40883';

PaymentStubIndexRateSpread.Type = 'PRICEOFFSET';

module.exports = PaymentStubIndexRateSpread;