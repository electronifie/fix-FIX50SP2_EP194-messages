var invert = require('invert-obj');

function LegPaymentStreamRateIndexCurvePeriod2 (legPaymentStreamRateIndexCurvePeriod2) {
  this.message = legPaymentStreamRateIndexCurvePeriod2;
}

LegPaymentStreamRateIndexCurvePeriod2.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexCurvePeriod2.Tag = '41564';

LegPaymentStreamRateIndexCurvePeriod2.Type = 'INT';

module.exports = LegPaymentStreamRateIndexCurvePeriod2;