var invert = require('invert-obj');

function UnderlyingPaymentStubIndexRateTreatment (underlyingPaymentStubIndexRateTreatment) {
  this.message = underlyingPaymentStubIndexRateTreatment;
}

UnderlyingPaymentStubIndexRateTreatment.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexRateTreatment.Tag = '40721';

UnderlyingPaymentStubIndexRateTreatment.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexRateTreatment;