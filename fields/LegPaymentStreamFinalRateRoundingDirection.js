var invert = require('invert-obj');

function LegPaymentStreamFinalRateRoundingDirection (legPaymentStreamFinalRateRoundingDirection) {
  this.message = legPaymentStreamFinalRateRoundingDirection;
}

LegPaymentStreamFinalRateRoundingDirection.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFinalRateRoundingDirection.Tag = '40346';

LegPaymentStreamFinalRateRoundingDirection.Type = 'INT';

module.exports = LegPaymentStreamFinalRateRoundingDirection;