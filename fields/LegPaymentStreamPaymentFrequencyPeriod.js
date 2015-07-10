var invert = require('invert-obj');

function LegPaymentStreamPaymentFrequencyPeriod (legPaymentStreamPaymentFrequencyPeriod) {
  this.message = legPaymentStreamPaymentFrequencyPeriod;
}

LegPaymentStreamPaymentFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentFrequencyPeriod.Tag = '40294';

LegPaymentStreamPaymentFrequencyPeriod.Type = 'INT';

module.exports = LegPaymentStreamPaymentFrequencyPeriod;