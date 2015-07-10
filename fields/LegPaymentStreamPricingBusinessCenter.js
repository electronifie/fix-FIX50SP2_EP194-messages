var invert = require('invert-obj');

function LegPaymentStreamPricingBusinessCenter (legPaymentStreamPricingBusinessCenter) {
  this.message = legPaymentStreamPricingBusinessCenter;
}

LegPaymentStreamPricingBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingBusinessCenter.Tag = '41562';

LegPaymentStreamPricingBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamPricingBusinessCenter;