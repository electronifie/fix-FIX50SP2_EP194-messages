var invert = require('invert-obj');

function PaymentStreamPricingBusinessDayConvention (paymentStreamPricingBusinessDayConvention) {
  this.message = paymentStreamPricingBusinessDayConvention;
}

PaymentStreamPricingBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingBusinessDayConvention.Tag = '41217';

PaymentStreamPricingBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamPricingBusinessDayConvention;