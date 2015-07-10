var invert = require('invert-obj');

function LegPaymentStreamPricingDayNumber (legPaymentStreamPricingDayNumber) {
  this.message = legPaymentStreamPricingDayNumber;
}

LegPaymentStreamPricingDayNumber.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDayNumber.Tag = '41598';

LegPaymentStreamPricingDayNumber.Type = 'INT';

module.exports = LegPaymentStreamPricingDayNumber;