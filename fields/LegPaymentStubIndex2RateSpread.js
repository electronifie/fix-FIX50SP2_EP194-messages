var invert = require('invert-obj');

function LegPaymentStubIndex2RateSpread (legPaymentStubIndex2RateSpread) {
  this.message = legPaymentStubIndex2RateSpread;
}

LegPaymentStubIndex2RateSpread.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2RateSpread.Tag = '40443';

LegPaymentStubIndex2RateSpread.Type = 'PRICEOFFSET';

module.exports = LegPaymentStubIndex2RateSpread;