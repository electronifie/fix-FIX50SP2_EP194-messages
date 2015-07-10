var invert = require('invert-obj');

function LegPaymentStreamResetFrequencyPeriod (legPaymentStreamResetFrequencyPeriod) {
  this.message = legPaymentStreamResetFrequencyPeriod;
}

LegPaymentStreamResetFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetFrequencyPeriod.Tag = '40306';

LegPaymentStreamResetFrequencyPeriod.Type = 'INT';

module.exports = LegPaymentStreamResetFrequencyPeriod;