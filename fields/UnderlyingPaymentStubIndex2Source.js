var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2Source (underlyingPaymentStubIndex2Source) {
  this.message = underlyingPaymentStubIndex2Source;
}

UnderlyingPaymentStubIndex2Source.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2Source.Tag = '40729';

UnderlyingPaymentStubIndex2Source.Type = 'INT';

module.exports = UnderlyingPaymentStubIndex2Source;