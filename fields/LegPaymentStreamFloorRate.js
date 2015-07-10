var invert = require('invert-obj');

function LegPaymentStreamFloorRate (legPaymentStreamFloorRate) {
  this.message = legPaymentStreamFloorRate;
}

LegPaymentStreamFloorRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFloorRate.Tag = '40342';

LegPaymentStreamFloorRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamFloorRate;