var invert = require('invert-obj');

function LegPaymentStreamPricingDayDistribution (legPaymentStreamPricingDayDistribution) {
  this.message = legPaymentStreamPricingDayDistribution;
}

LegPaymentStreamPricingDayDistribution.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDayDistribution.Tag = '41583';

LegPaymentStreamPricingDayDistribution.Type = 'INT';

module.exports = LegPaymentStreamPricingDayDistribution;