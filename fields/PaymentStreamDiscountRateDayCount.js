var invert = require('invert-obj');

function PaymentStreamDiscountRateDayCount (paymentStreamDiscountRateDayCount) {
  this.message = paymentStreamDiscountRateDayCount;
}

PaymentStreamDiscountRateDayCount.prototype.value = function () {
  return this.message;
};

PaymentStreamDiscountRateDayCount.Tag = '40746';

PaymentStreamDiscountRateDayCount.Type = 'INT';

module.exports = PaymentStreamDiscountRateDayCount;