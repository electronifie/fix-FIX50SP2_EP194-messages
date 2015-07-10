var invert = require('invert-obj');

function PaymentStreamPricingDayType (paymentStreamPricingDayType) {
  this.message = paymentStreamPricingDayType;
}

PaymentStreamPricingDayType.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingDayType.Tag = '41213';

PaymentStreamPricingDayType.Type = 'INT';

module.exports = PaymentStreamPricingDayType;