var invert = require('invert-obj');

function LegPaymentStreamPricingDate (legPaymentStreamPricingDate) {
  this.message = legPaymentStreamPricingDate;
}

LegPaymentStreamPricingDate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingDate.Tag = '41594';

LegPaymentStreamPricingDate.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamPricingDate;