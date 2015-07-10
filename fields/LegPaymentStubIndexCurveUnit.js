var invert = require('invert-obj');

function LegPaymentStubIndexCurveUnit (legPaymentStubIndexCurveUnit) {
  this.message = legPaymentStubIndexCurveUnit;
}

LegPaymentStubIndexCurveUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexCurveUnit.Tag = '40427';

LegPaymentStubIndexCurveUnit.Type = 'STRING';

module.exports = LegPaymentStubIndexCurveUnit;