var invert = require('invert-obj');

function LegPaymentStreamPricingDayOfWeek (legPaymentStreamPricingDayOfWeek) {
  this.message = legPaymentStreamPricingDayOfWeek;
}

LegPaymentStreamPricingDayOfWeek.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDayOfWeek.Tag = '41597';

LegPaymentStreamPricingDayOfWeek.Type = 'INT';

module.exports = LegPaymentStreamPricingDayOfWeek;