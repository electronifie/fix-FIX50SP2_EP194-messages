var invert = require('invert-obj');

function LegPaymentStreamInflationInitialIndexLevel (legPaymentStreamInflationInitialIndexLevel) {
  this.message = legPaymentStreamInflationInitialIndexLevel;
}

LegPaymentStreamInflationInitialIndexLevel.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationInitialIndexLevel.Tag = '40356';

LegPaymentStreamInflationInitialIndexLevel.Type = 'FLOAT';

module.exports = LegPaymentStreamInflationInitialIndexLevel;