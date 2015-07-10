var invert = require('invert-obj');

function NoUnderlyingPaymentStreamPricingDates (noUnderlyingPaymentStreamPricingDates) {
  this.message = noUnderlyingPaymentStreamPricingDates;
}

NoUnderlyingPaymentStreamPricingDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamPricingDates.Tag = '41941';

NoUnderlyingPaymentStreamPricingDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamPricingDates;