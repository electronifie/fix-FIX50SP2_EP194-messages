var invert = require('invert-obj');

function LegPaymentStreamRateIndexCurvePeriod (legPaymentStreamRateIndexCurvePeriod) {
  this.message = legPaymentStreamRateIndexCurvePeriod;
}

LegPaymentStreamRateIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexCurvePeriod.Tag = '40334';

LegPaymentStreamRateIndexCurvePeriod.Type = 'INT';

module.exports = LegPaymentStreamRateIndexCurvePeriod;