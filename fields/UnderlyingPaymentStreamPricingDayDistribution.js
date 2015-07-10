var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDayDistribution (underlyingPaymentStreamPricingDayDistribution) {
  this.message = underlyingPaymentStreamPricingDayDistribution;
}

UnderlyingPaymentStreamPricingDayDistribution.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDayDistribution.Tag = '41931';

UnderlyingPaymentStreamPricingDayDistribution.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDayDistribution;