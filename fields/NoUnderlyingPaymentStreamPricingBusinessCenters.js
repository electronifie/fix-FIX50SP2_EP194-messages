var invert = require('invert-obj');

function NoUnderlyingPaymentStreamPricingBusinessCenters (noUnderlyingPaymentStreamPricingBusinessCenters) {
  this.message = noUnderlyingPaymentStreamPricingBusinessCenters;
}

NoUnderlyingPaymentStreamPricingBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamPricingBusinessCenters.Tag = '41909';

NoUnderlyingPaymentStreamPricingBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamPricingBusinessCenters;