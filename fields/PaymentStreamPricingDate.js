var invert = require('invert-obj');

function PaymentStreamPricingDate (paymentStreamPricingDate) {
  this.message = paymentStreamPricingDate;
}

PaymentStreamPricingDate.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingDate.Tag = '41225';

PaymentStreamPricingDate.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamPricingDate;