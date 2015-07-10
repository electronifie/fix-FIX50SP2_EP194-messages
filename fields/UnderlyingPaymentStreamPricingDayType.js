var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDayType (underlyingPaymentStreamPricingDayType) {
  this.message = underlyingPaymentStreamPricingDayType;
}

UnderlyingPaymentStreamPricingDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDayType.Tag = '41930';

UnderlyingPaymentStreamPricingDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDayType;