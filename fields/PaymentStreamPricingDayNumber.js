var invert = require('invert-obj');

function PaymentStreamPricingDayNumber (paymentStreamPricingDayNumber) {
  this.message = paymentStreamPricingDayNumber;
}

PaymentStreamPricingDayNumber.prototype.value = function () {
  return this.message;
};

PaymentStreamPricingDayNumber.Tag = '41229';

PaymentStreamPricingDayNumber.Type = 'INT';

module.exports = PaymentStreamPricingDayNumber;