var invert = require('invert-obj');

function UnderlyingPaymentStreamDiscountRateDayCount (underlyingPaymentStreamDiscountRateDayCount) {
  this.message = underlyingPaymentStreamDiscountRateDayCount;
}

UnderlyingPaymentStreamDiscountRateDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamDiscountRateDayCount.Tag = '40576';

UnderlyingPaymentStreamDiscountRateDayCount.Type = 'INT';

module.exports = UnderlyingPaymentStreamDiscountRateDayCount;