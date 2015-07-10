var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2RateSpread (underlyingPaymentStubIndex2RateSpread) {
  this.message = underlyingPaymentStubIndex2RateSpread;
}

UnderlyingPaymentStubIndex2RateSpread.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2RateSpread.Tag = '40733';

UnderlyingPaymentStubIndex2RateSpread.Type = 'PRICEOFFSET';

module.exports = UnderlyingPaymentStubIndex2RateSpread;