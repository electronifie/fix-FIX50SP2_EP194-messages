var invert = require('invert-obj');

function LegPaymentStreamPricingDateType (legPaymentStreamPricingDateType) {
  this.message = legPaymentStreamPricingDateType;
}

LegPaymentStreamPricingDateType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDateType.Tag = '41595';

LegPaymentStreamPricingDateType.Type = 'INT';

module.exports = LegPaymentStreamPricingDateType;