var invert = require('invert-obj');

function PaymentStubIndex2CurveUnit (paymentStubIndex2CurveUnit) {
  this.message = paymentStubIndex2CurveUnit;
}

PaymentStubIndex2CurveUnit.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2CurveUnit.Tag = '40895';

PaymentStubIndex2CurveUnit.Type = 'STRING';

module.exports = PaymentStubIndex2CurveUnit;