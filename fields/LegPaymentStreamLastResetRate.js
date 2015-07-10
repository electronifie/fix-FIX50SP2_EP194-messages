var invert = require('invert-obj');

function LegPaymentStreamLastResetRate (legPaymentStreamLastResetRate) {
  this.message = legPaymentStreamLastResetRate;
}

LegPaymentStreamLastResetRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamLastResetRate.Tag = '41576';

LegPaymentStreamLastResetRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamLastResetRate;