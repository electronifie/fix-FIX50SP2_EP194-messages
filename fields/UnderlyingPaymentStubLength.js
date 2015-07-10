var invert = require('invert-obj');

function UnderlyingPaymentStubLength (underlyingPaymentStubLength) {
  this.message = underlyingPaymentStubLength;
}

UnderlyingPaymentStubLength.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubLength.Tag = '40710';

UnderlyingPaymentStubLength.Type = 'INT';

module.exports = UnderlyingPaymentStubLength;