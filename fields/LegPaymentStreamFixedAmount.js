var invert = require('invert-obj');

function LegPaymentStreamFixedAmount (legPaymentStreamFixedAmount) {
  this.message = legPaymentStreamFixedAmount;
}

LegPaymentStreamFixedAmount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixedAmount.Tag = '40327';

LegPaymentStreamFixedAmount.Type = 'AMT';

module.exports = LegPaymentStreamFixedAmount;