var invert = require('invert-obj');

function LegPaymentStreamRate (legPaymentStreamRate) {
  this.message = legPaymentStreamRate;
}

LegPaymentStreamRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRate.Tag = '40326';

LegPaymentStreamRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamRate;