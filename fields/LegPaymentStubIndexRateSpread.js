var invert = require('invert-obj');

function LegPaymentStubIndexRateSpread (legPaymentStubIndexRateSpread) {
  this.message = legPaymentStubIndexRateSpread;
}

LegPaymentStubIndexRateSpread.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexRateSpread.Tag = '40429';

LegPaymentStubIndexRateSpread.Type = 'PRICEOFFSET';

module.exports = LegPaymentStubIndexRateSpread;