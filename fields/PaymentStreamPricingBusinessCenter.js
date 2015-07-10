var invert = require('invert-obj');

function PaymentStreamPricingBusinessCenter (paymentStreamPricingBusinessCenter) {
  this.message = paymentStreamPricingBusinessCenter;
}

PaymentStreamPricingBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingBusinessCenter.Tag = '41193';

PaymentStreamPricingBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamPricingBusinessCenter;