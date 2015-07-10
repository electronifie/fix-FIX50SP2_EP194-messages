var invert = require('invert-obj');

function LegPaymentStreamPricingBusinessCalendar (legPaymentStreamPricingBusinessCalendar) {
  this.message = legPaymentStreamPricingBusinessCalendar;
}

LegPaymentStreamPricingBusinessCalendar.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPricingBusinessCalendar.Tag = '41585';

LegPaymentStreamPricingBusinessCalendar.Type = 'STRING';

module.exports = LegPaymentStreamPricingBusinessCalendar;