var invert = require('invert-obj');

function LegPaymentStreamFlatRateIndicator (legPaymentStreamFlatRateIndicator) {
  this.message = legPaymentStreamFlatRateIndicator;
}

LegPaymentStreamFlatRateIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFlatRateIndicator.Tag = '41549';

LegPaymentStreamFlatRateIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamFlatRateIndicator;