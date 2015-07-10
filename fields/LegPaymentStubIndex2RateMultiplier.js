var invert = require('invert-obj');

function LegPaymentStubIndex2RateMultiplier (legPaymentStubIndex2RateMultiplier) {
  this.message = legPaymentStubIndex2RateMultiplier;
}

LegPaymentStubIndex2RateMultiplier.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2RateMultiplier.Tag = '40442';

LegPaymentStubIndex2RateMultiplier.Type = 'FLOAT';

module.exports = LegPaymentStubIndex2RateMultiplier;