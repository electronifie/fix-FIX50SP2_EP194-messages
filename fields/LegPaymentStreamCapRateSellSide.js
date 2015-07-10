var invert = require('invert-obj');

function LegPaymentStreamCapRateSellSide (legPaymentStreamCapRateSellSide) {
  this.message = legPaymentStreamCapRateSellSide;
}

LegPaymentStreamCapRateSellSide.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCapRateSellSide.Tag = '40341';

LegPaymentStreamCapRateSellSide.Type = 'INT';

module.exports = LegPaymentStreamCapRateSellSide;