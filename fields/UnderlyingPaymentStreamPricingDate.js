var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDate (underlyingPaymentStreamPricingDate) {
  this.message = underlyingPaymentStreamPricingDate;
}

UnderlyingPaymentStreamPricingDate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDate.Tag = '41942';

UnderlyingPaymentStreamPricingDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamPricingDate;