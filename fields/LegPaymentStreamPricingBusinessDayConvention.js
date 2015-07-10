var invert = require('invert-obj');

function LegPaymentStreamPricingBusinessDayConvention (legPaymentStreamPricingBusinessDayConvention) {
  this.message = legPaymentStreamPricingBusinessDayConvention;
}

LegPaymentStreamPricingBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingBusinessDayConvention.Tag = '41586';

LegPaymentStreamPricingBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamPricingBusinessDayConvention;