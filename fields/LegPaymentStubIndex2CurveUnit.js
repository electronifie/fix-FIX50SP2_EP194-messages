var invert = require('invert-obj');

function LegPaymentStubIndex2CurveUnit (legPaymentStubIndex2CurveUnit) {
  this.message = legPaymentStubIndex2CurveUnit;
}

LegPaymentStubIndex2CurveUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2CurveUnit.Tag = '40441';

LegPaymentStubIndex2CurveUnit.Type = 'STRING';

module.exports = LegPaymentStubIndex2CurveUnit;