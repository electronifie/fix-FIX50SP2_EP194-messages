var invert = require('invert-obj');

function LegPaymentStreamPricingDayType (legPaymentStreamPricingDayType) {
  this.message = legPaymentStreamPricingDayType;
}

LegPaymentStreamPricingDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDayType.Tag = '41582';

LegPaymentStreamPricingDayType.Type = 'INT';

module.exports = LegPaymentStreamPricingDayType;