var invert = require('invert-obj');

function LegPaymentStreamPricingDayCount (legPaymentStreamPricingDayCount) {
  this.message = legPaymentStreamPricingDayCount;
}

LegPaymentStreamPricingDayCount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDayCount.Tag = '41584';

LegPaymentStreamPricingDayCount.Type = 'INT';

module.exports = LegPaymentStreamPricingDayCount;