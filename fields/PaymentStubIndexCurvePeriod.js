var invert = require('invert-obj');

function PaymentStubIndexCurvePeriod (paymentStubIndexCurvePeriod) {
  this.message = paymentStubIndexCurvePeriod;
}

PaymentStubIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

PaymentStubIndexCurvePeriod.Tag = '40880';

PaymentStubIndexCurvePeriod.Type = 'INT';

module.exports = PaymentStubIndexCurvePeriod;