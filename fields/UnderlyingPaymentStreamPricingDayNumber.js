var invert = require('invert-obj');

function UnderlyingPaymentStreamPricingDayNumber (underlyingPaymentStreamPricingDayNumber) {
  this.message = underlyingPaymentStreamPricingDayNumber;
}

UnderlyingPaymentStreamPricingDayNumber.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPricingDayNumber.Tag = '41946';

UnderlyingPaymentStreamPricingDayNumber.Type = 'INT';

module.exports = UnderlyingPaymentStreamPricingDayNumber;