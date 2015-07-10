var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDayOfWeek (underlyingPaymentStreamPricingDayOfWeek) {
  this.message = underlyingPaymentStreamPricingDayOfWeek;
}

UnderlyingPaymentStreamPricingDayOfWeek.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDayOfWeek.Tag = '41945';

UnderlyingPaymentStreamPricingDayOfWeek.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDayOfWeek;