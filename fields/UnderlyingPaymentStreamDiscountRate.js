var invert = require('invert-obj');

function UnderlyingPaymentStreamDiscountRate (underlyingPaymentStreamDiscountRate) {
  this.message = underlyingPaymentStreamDiscountRate;
}

UnderlyingPaymentStreamDiscountRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamDiscountRate.Tag = '40575';

UnderlyingPaymentStreamDiscountRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamDiscountRate;