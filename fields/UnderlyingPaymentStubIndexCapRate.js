var invert = require('invert-obj');

function UnderlyingPaymentStubIndexCapRate (underlyingPaymentStubIndexCapRate) {
  this.message = underlyingPaymentStubIndexCapRate;
}

UnderlyingPaymentStubIndexCapRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexCapRate.Tag = '40722';

UnderlyingPaymentStubIndexCapRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStubIndexCapRate;