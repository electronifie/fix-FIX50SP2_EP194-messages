var invert = require('invert-obj');

function LegPaymentStreamRateSpread (legPaymentStreamRateSpread) {
  this.message = legPaymentStreamRateSpread;
}

LegPaymentStreamRateSpread.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateSpread.Tag = '40336';

LegPaymentStreamRateSpread.Type = 'PRICEOFFSET';

module.exports = LegPaymentStreamRateSpread;