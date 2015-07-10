var invert = require('invert-obj');

function NoPaymentStreamPricingDays (noPaymentStreamPricingDays) {
  this.message = noPaymentStreamPricingDays;
}

NoPaymentStreamPricingDays.prototype.value = function () {
  return this.message;
};

NoPaymentStreamPricingDays.Tag = '41227';

NoPaymentStreamPricingDays.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamPricingDays;