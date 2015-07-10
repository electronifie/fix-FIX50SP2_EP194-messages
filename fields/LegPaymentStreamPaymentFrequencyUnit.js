var invert = require('invert-obj');

function LegPaymentStreamPaymentFrequencyUnit (legPaymentStreamPaymentFrequencyUnit) {
  this.message = legPaymentStreamPaymentFrequencyUnit;
}

LegPaymentStreamPaymentFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentFrequencyUnit.Tag = '40295';

LegPaymentStreamPaymentFrequencyUnit.Type = 'STRING';

module.exports = LegPaymentStreamPaymentFrequencyUnit;