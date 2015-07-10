var invert = require('invert-obj');

function LegPaymentStreamFloorRateSellSide (legPaymentStreamFloorRateSellSide) {
  this.message = legPaymentStreamFloorRateSellSide;
}

LegPaymentStreamFloorRateSellSide.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFloorRateSellSide.Tag = '40344';

LegPaymentStreamFloorRateSellSide.Type = 'INT';

module.exports = LegPaymentStreamFloorRateSellSide;