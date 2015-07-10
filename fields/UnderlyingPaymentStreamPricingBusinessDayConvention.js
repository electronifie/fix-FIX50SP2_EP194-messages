var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingBusinessDayConvention (underlyingPaymentStreamPricingBusinessDayConvention) {
  this.message = underlyingPaymentStreamPricingBusinessDayConvention;
}

UnderlyingPaymentStreamPricingBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingBusinessDayConvention.Tag = '41934';

UnderlyingPaymentStreamPricingBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingBusinessDayConvention;