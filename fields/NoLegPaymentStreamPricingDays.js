var invert = require('invert-obj');

function NoLegPaymentStreamPricingDays (noLegPaymentStreamPricingDays) {
  this.message = noLegPaymentStreamPricingDays;
}

NoLegPaymentStreamPricingDays.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamPricingDays.Tag = '41596';

NoLegPaymentStreamPricingDays.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamPricingDays;