var invert = require('invert-obj');

function LegPaymentStreamRateIndexSource (legPaymentStreamRateIndexSource) {
  this.message = legPaymentStreamRateIndexSource;
}

LegPaymentStreamRateIndexSource.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexSource.Tag = '40332';

LegPaymentStreamRateIndexSource.Type = 'INT';

module.exports = LegPaymentStreamRateIndexSource;