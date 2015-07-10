var invert = require('invert-obj');

function UnderlyingPaymentStubIndex (underlyingPaymentStubIndex) {
  this.message = underlyingPaymentStubIndex;
}

UnderlyingPaymentStubIndex.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex.Tag = '40714';

UnderlyingPaymentStubIndex.Type = 'STRING';

module.exports = UnderlyingPaymentStubIndex;