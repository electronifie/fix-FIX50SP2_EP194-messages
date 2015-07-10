var invert = require('invert-obj');

function PaymentDiscountFactor (paymentDiscountFactor) {
  this.message = paymentDiscountFactor;
}

PaymentDiscountFactor.prototype.value = function () {
  return this.message;
};

PaymentDiscountFactor.Tag = '40224';

PaymentDiscountFactor.Type = 'FLOAT';

module.exports = PaymentDiscountFactor;