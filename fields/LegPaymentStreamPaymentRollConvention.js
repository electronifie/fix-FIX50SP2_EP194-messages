var invert = require('invert-obj');

function LegPaymentStreamPaymentRollConvention (legPaymentStreamPaymentRollConvention) {
  this.message = legPaymentStreamPaymentRollConvention;
}

LegPaymentStreamPaymentRollConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentRollConvention.Tag = '40296';

LegPaymentStreamPaymentRollConvention.Type = 'STRING';

module.exports = LegPaymentStreamPaymentRollConvention;