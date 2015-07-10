var invert = require('invert-obj');

function LegPaymentStreamCapRateBuySide (legPaymentStreamCapRateBuySide) {
  this.message = legPaymentStreamCapRateBuySide;
}

LegPaymentStreamCapRateBuySide.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCapRateBuySide.Tag = '40340';

LegPaymentStreamCapRateBuySide.Type = 'INT';

module.exports = LegPaymentStreamCapRateBuySide;