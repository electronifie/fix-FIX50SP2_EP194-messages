var invert = require('invert-obj');

function NoPaymentStreamPricingBusinessCenters (noPaymentStreamPricingBusinessCenters) {
  this.message = noPaymentStreamPricingBusinessCenters;
}

NoPaymentStreamPricingBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamPricingBusinessCenters.Tag = '41192';

NoPaymentStreamPricingBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamPricingBusinessCenters;