var invert = require('invert-obj');

function LegPaymentStreamRateMultiplier (legPaymentStreamRateMultiplier) {
  this.message = legPaymentStreamRateMultiplier;
}

LegPaymentStreamRateMultiplier.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateMultiplier.Tag = '40335';

LegPaymentStreamRateMultiplier.Type = 'FLOAT';

module.exports = LegPaymentStreamRateMultiplier;