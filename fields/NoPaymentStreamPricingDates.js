var invert = require('invert-obj');

function NoPaymentStreamPricingDates (noPaymentStreamPricingDates) {
  this.message = noPaymentStreamPricingDates;
}

NoPaymentStreamPricingDates.prototype.value = function () {
  return this.message;
};

NoPaymentStreamPricingDates.Tag = '41224';

NoPaymentStreamPricingDates.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamPricingDates;