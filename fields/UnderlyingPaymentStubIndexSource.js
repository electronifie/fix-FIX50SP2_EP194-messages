var invert = require('invert-obj');

function UnderlyingPaymentStubIndexSource (underlyingPaymentStubIndexSource) {
  this.message = underlyingPaymentStubIndexSource;
}

UnderlyingPaymentStubIndexSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexSource.Tag = '40715';

UnderlyingPaymentStubIndexSource.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexSource;