var invert = require('invert-obj');

function LegPaymentStreamFutureValueDateAdjusted (legPaymentStreamFutureValueDateAdjusted) {
  this.message = legPaymentStreamFutureValueDateAdjusted;
}

LegPaymentStreamFutureValueDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFutureValueDateAdjusted.Tag = '40330';

LegPaymentStreamFutureValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamFutureValueDateAdjusted;