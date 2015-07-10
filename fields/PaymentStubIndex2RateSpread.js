var invert = require('invert-obj');

function PaymentStubIndex2RateSpread (paymentStubIndex2RateSpread) {
  this.message = paymentStubIndex2RateSpread;
}

PaymentStubIndex2RateSpread.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2RateSpread.Tag = '40897';

PaymentStubIndex2RateSpread.Type = 'PRICEOFFSET';

module.exports = PaymentStubIndex2RateSpread;