var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2CurveUnit (underlyingPaymentStubIndex2CurveUnit) {
  this.message = underlyingPaymentStubIndex2CurveUnit;
}

UnderlyingPaymentStubIndex2CurveUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2CurveUnit.Tag = '40731';

UnderlyingPaymentStubIndex2CurveUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStubIndex2CurveUnit;