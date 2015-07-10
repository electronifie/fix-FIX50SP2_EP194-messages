var invert = require('invert-obj');

function UnderlyingPaymentStubIndexRateSpread (underlyingPaymentStubIndexRateSpread) {
  this.message = underlyingPaymentStubIndexRateSpread;
}

UnderlyingPaymentStubIndexRateSpread.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexRateSpread.Tag = '40719';

UnderlyingPaymentStubIndexRateSpread.Type = 'PRICEOFFSET';

module.exports = UnderlyingPaymentStubIndexRateSpread;