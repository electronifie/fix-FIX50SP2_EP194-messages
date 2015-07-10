var invert = require('invert-obj');

function PaymentStreamPricingBusinessCalendar (paymentStreamPricingBusinessCalendar) {
  this.message = paymentStreamPricingBusinessCalendar;
}

PaymentStreamPricingBusinessCalendar.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingBusinessCalendar.Tag = '41216';

PaymentStreamPricingBusinessCalendar.Type = 'STRING';

module.exports = PaymentStreamPricingBusinessCalendar;