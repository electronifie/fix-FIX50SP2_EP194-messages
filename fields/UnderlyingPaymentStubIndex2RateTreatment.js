var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2RateTreatment (underlyingPaymentStubIndex2RateTreatment) {
  this.message = underlyingPaymentStubIndex2RateTreatment;
}

UnderlyingPaymentStubIndex2RateTreatment.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2RateTreatment.Tag = '40735';

UnderlyingPaymentStubIndex2RateTreatment.Type = 'INT';

module.exports = UnderlyingPaymentStubIndex2RateTreatment;