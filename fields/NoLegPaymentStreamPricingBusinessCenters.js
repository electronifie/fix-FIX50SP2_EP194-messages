var invert = require('invert-obj');

function NoLegPaymentStreamPricingBusinessCenters (noLegPaymentStreamPricingBusinessCenters) {
  this.message = noLegPaymentStreamPricingBusinessCenters;
}

NoLegPaymentStreamPricingBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamPricingBusinessCenters.Tag = '41561';

NoLegPaymentStreamPricingBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamPricingBusinessCenters;