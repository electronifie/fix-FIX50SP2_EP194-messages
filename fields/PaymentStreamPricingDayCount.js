var invert = require('invert-obj');

function PaymentStreamPricingDayCount (paymentStreamPricingDayCount) {
  this.message = paymentStreamPricingDayCount;
}

PaymentStreamPricingDayCount.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingDayCount.Tag = '41215';

PaymentStreamPricingDayCount.Type = 'INT';

module.exports = PaymentStreamPricingDayCount;