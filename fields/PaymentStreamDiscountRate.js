var invert = require('invert-obj');

function PaymentStreamDiscountRate (paymentStreamDiscountRate) {
  this.message = paymentStreamDiscountRate;
}

PaymentStreamDiscountRate.prototype.value = function () {
  return this.message;
};

PaymentStreamDiscountRate.Tag = '40745';

PaymentStreamDiscountRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamDiscountRate;