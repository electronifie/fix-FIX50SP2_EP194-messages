var invert = require('invert-obj');

function UnderlyingPaymentStubIndexCurveUnit (underlyingPaymentStubIndexCurveUnit) {
  this.message = underlyingPaymentStubIndexCurveUnit;
}

UnderlyingPaymentStubIndexCurveUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexCurveUnit.Tag = '40717';

UnderlyingPaymentStubIndexCurveUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStubIndexCurveUnit;