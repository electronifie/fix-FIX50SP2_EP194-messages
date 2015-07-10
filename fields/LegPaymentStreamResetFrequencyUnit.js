var invert = require('invert-obj');

function LegPaymentStreamResetFrequencyUnit (legPaymentStreamResetFrequencyUnit) {
  this.message = legPaymentStreamResetFrequencyUnit;
}

LegPaymentStreamResetFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetFrequencyUnit.Tag = '40307';

LegPaymentStreamResetFrequencyUnit.Type = 'STRING';

module.exports = LegPaymentStreamResetFrequencyUnit;