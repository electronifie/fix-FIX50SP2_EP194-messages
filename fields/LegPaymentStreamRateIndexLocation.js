var invert = require('invert-obj');

function LegPaymentStreamRateIndexLocation (legPaymentStreamRateIndexLocation) {
  this.message = legPaymentStreamRateIndexLocation;
}

LegPaymentStreamRateIndexLocation.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexLocation.Tag = '41565';

LegPaymentStreamRateIndexLocation.Type = 'STRING';

module.exports = LegPaymentStreamRateIndexLocation;