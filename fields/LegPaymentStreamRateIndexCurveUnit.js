var invert = require('invert-obj');

function LegPaymentStreamRateIndexCurveUnit (legPaymentStreamRateIndexCurveUnit) {
  this.message = legPaymentStreamRateIndexCurveUnit;
}

LegPaymentStreamRateIndexCurveUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexCurveUnit.Tag = '40333';

LegPaymentStreamRateIndexCurveUnit.Type = 'STRING';

module.exports = LegPaymentStreamRateIndexCurveUnit;