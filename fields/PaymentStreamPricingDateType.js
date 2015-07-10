var invert = require('invert-obj');

function PaymentStreamPricingDateType (paymentStreamPricingDateType) {
  this.message = paymentStreamPricingDateType;
}

PaymentStreamPricingDateType.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingDateType.Tag = '41226';

PaymentStreamPricingDateType.Type = 'INT';

module.exports = PaymentStreamPricingDateType;