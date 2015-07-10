var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingBusinessCalendar (underlyingPaymentStreamPricingBusinessCalendar) {
  this.message = underlyingPaymentStreamPricingBusinessCalendar;
}

UnderlyingPaymentStreamPricingBusinessCalendar.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingBusinessCalendar.Tag = '41933';

UnderlyingPaymentStreamPricingBusinessCalendar.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPricingBusinessCalendar;