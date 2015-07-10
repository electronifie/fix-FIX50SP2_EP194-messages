var invert = require('invert-obj');

function UnderlyingPaymentStubRate (underlyingPaymentStubRate) {
  this.message = underlyingPaymentStubRate;
}

UnderlyingPaymentStubRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubRate.Tag = '40711';

UnderlyingPaymentStubRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStubRate;