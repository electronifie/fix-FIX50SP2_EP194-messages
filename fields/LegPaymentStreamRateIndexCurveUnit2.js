var invert = require('invert-obj');

function LegPaymentStreamRateIndexCurveUnit2 (legPaymentStreamRateIndexCurveUnit2) {
  this.message = legPaymentStreamRateIndexCurveUnit2;
}

LegPaymentStreamRateIndexCurveUnit2.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexCurveUnit2.Tag = '41563';

LegPaymentStreamRateIndexCurveUnit2.Type = 'STRING';

module.exports = LegPaymentStreamRateIndexCurveUnit2;