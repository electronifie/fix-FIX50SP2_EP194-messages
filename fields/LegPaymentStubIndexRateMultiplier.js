var invert = require('invert-obj');

function LegPaymentStubIndexRateMultiplier (legPaymentStubIndexRateMultiplier) {
  this.message = legPaymentStubIndexRateMultiplier;
}

LegPaymentStubIndexRateMultiplier.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexRateMultiplier.Tag = '40428';

LegPaymentStubIndexRateMultiplier.Type = 'FLOAT';

module.exports = LegPaymentStubIndexRateMultiplier;