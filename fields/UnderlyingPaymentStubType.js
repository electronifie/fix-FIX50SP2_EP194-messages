var invert = require('invert-obj');

function UnderlyingPaymentStubType (underlyingPaymentStubType) {
  this.message = underlyingPaymentStubType;
}

UnderlyingPaymentStubType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubType.Tag = '40709';

UnderlyingPaymentStubType.Type = 'INT';

module.exports = UnderlyingPaymentStubType;