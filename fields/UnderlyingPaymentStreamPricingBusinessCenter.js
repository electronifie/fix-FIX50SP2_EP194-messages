var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingBusinessCenter (underlyingPaymentStreamPricingBusinessCenter) {
  this.message = underlyingPaymentStreamPricingBusinessCenter;
}

UnderlyingPaymentStreamPricingBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingBusinessCenter.Tag = '41910';

UnderlyingPaymentStreamPricingBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPricingBusinessCenter;