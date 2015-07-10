var invert = require('invert-obj');

function LegPaymentStreamRateIndexLevel (legPaymentStreamRateIndexLevel) {
  this.message = legPaymentStreamRateIndexLevel;
}

LegPaymentStreamRateIndexLevel.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexLevel.Tag = '41566';

LegPaymentStreamRateIndexLevel.Type = 'QTY';

module.exports = LegPaymentStreamRateIndexLevel;