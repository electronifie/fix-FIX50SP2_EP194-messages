var invert = require('invert-obj');

function LegPaymentStreamInitialRate (legPaymentStreamInitialRate) {
  this.message = legPaymentStreamInitialRate;
}

LegPaymentStreamInitialRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialRate.Tag = '40345';

LegPaymentStreamInitialRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamInitialRate;