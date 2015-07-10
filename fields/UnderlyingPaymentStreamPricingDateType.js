var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDateType (underlyingPaymentStreamPricingDateType) {
  this.message = underlyingPaymentStreamPricingDateType;
}

UnderlyingPaymentStreamPricingDateType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDateType.Tag = '41943';

UnderlyingPaymentStreamPricingDateType.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDateType;