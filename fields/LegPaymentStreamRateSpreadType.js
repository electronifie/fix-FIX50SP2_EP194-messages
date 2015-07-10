var invert = require('invert-obj');

function LegPaymentStreamRateSpreadType (legPaymentStreamRateSpreadType) {
  this.message = legPaymentStreamRateSpreadType;
}

LegPaymentStreamRateSpreadType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateSpreadType.Tag = '41575';

LegPaymentStreamRateSpreadType.Type = 'INT';

module.exports = LegPaymentStreamRateSpreadType;