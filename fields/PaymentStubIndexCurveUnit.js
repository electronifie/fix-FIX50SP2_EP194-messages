var invert = require('invert-obj');

function PaymentStubIndexCurveUnit (paymentStubIndexCurveUnit) {
  this.message = paymentStubIndexCurveUnit;
}

PaymentStubIndexCurveUnit.prototype.value = function () {
  return this.message;
};

PaymentStubIndexCurveUnit.Tag = '40881';

PaymentStubIndexCurveUnit.Type = 'STRING';

module.exports = PaymentStubIndexCurveUnit;