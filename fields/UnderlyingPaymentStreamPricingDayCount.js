var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDayCount (underlyingPaymentStreamPricingDayCount) {
  this.message = underlyingPaymentStreamPricingDayCount;
}

UnderlyingPaymentStreamPricingDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDayCount.Tag = '41932';

UnderlyingPaymentStreamPricingDayCount.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDayCount;