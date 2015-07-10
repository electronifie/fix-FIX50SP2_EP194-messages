var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2 (underlyingPaymentStubIndex2) {
  this.message = underlyingPaymentStubIndex2;
}

UnderlyingPaymentStubIndex2.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2.Tag = '40728';

UnderlyingPaymentStubIndex2.Type = 'STRING';

module.exports = UnderlyingPaymentStubIndex2;