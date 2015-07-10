var invert = require('invert-obj');

function PaymentStubIndexRateTreatment (paymentStubIndexRateTreatment) {
  this.message = paymentStubIndexRateTreatment;
}

PaymentStubIndexRateTreatment.prototype.value = function () {
  return this.message;
};

PaymentStubIndexRateTreatment.Tag = '40885';

PaymentStubIndexRateTreatment.Type = 'INT';

module.exports = PaymentStubIndexRateTreatment;