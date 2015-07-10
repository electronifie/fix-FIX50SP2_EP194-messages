var invert = require('invert-obj');

function NoUnderlyingPaymentStreamPricingDays (noUnderlyingPaymentStreamPricingDays) {
  this.message = noUnderlyingPaymentStreamPricingDays;
}

NoUnderlyingPaymentStreamPricingDays.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamPricingDays.Tag = '41944';

NoUnderlyingPaymentStreamPricingDays.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamPricingDays;