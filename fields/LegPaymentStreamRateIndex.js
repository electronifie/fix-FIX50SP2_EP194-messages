var invert = require('invert-obj');

function LegPaymentStreamRateIndex (legPaymentStreamRateIndex) {
  this.message = legPaymentStreamRateIndex;
}

LegPaymentStreamRateIndex.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndex.Tag = '40331';

LegPaymentStreamRateIndex.Type = 'STRING';

module.exports = LegPaymentStreamRateIndex;