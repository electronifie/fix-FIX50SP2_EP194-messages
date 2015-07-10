var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2CapRate (underlyingPaymentStubIndex2CapRate) {
  this.message = underlyingPaymentStubIndex2CapRate;
}

UnderlyingPaymentStubIndex2CapRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2CapRate.Tag = '40736';

UnderlyingPaymentStubIndex2CapRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStubIndex2CapRate;