var invert = require('invert-obj');

function LegPaymentStreamDelayIndicator (legPaymentStreamDelayIndicator) {
  this.message = legPaymentStreamDelayIndicator;
}

LegPaymentStreamDelayIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamDelayIndicator.Tag = '40281';

LegPaymentStreamDelayIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamDelayIndicator;