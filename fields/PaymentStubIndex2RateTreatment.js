var invert = require('invert-obj');

function PaymentStubIndex2RateTreatment (paymentStubIndex2RateTreatment) {
  this.message = paymentStubIndex2RateTreatment;
}

PaymentStubIndex2RateTreatment.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2RateTreatment.Tag = '40899';

PaymentStubIndex2RateTreatment.Type = 'INT';

module.exports = PaymentStubIndex2RateTreatment;