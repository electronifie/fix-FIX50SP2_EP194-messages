var invert = require('invert-obj');

function LegPaymentStreamRateSpreadPositionType (legPaymentStreamRateSpreadPositionType) {
  this.message = legPaymentStreamRateSpreadPositionType;
}

LegPaymentStreamRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateSpreadPositionType.Tag = '40337';

LegPaymentStreamRateSpreadPositionType.Type = 'INT';

module.exports = LegPaymentStreamRateSpreadPositionType;