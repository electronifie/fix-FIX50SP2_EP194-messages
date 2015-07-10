var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2FloorRate (underlyingPaymentStubIndex2FloorRate) {
  this.message = underlyingPaymentStubIndex2FloorRate;
}

UnderlyingPaymentStubIndex2FloorRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2FloorRate.Tag = '40737';

UnderlyingPaymentStubIndex2FloorRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStubIndex2FloorRate;