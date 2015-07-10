var invert = require('invert-obj');

function LegPaymentStreamFloorRateBuySide (legPaymentStreamFloorRateBuySide) {
  this.message = legPaymentStreamFloorRateBuySide;
}

LegPaymentStreamFloorRateBuySide.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFloorRateBuySide.Tag = '40343';

LegPaymentStreamFloorRateBuySide.Type = 'INT';

module.exports = LegPaymentStreamFloorRateBuySide;