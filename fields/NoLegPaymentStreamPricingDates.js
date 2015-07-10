var invert = require('invert-obj');

function NoLegPaymentStreamPricingDates (noLegPaymentStreamPricingDates) {
  this.message = noLegPaymentStreamPricingDates;
}

NoLegPaymentStreamPricingDates.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamPricingDates.Tag = '41593';

NoLegPaymentStreamPricingDates.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamPricingDates;