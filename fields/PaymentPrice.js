var invert = require('invert-obj');

function PaymentPrice (paymentPrice) {
  this.message = paymentPrice;
}

PaymentPrice.prototype.value = function () {
  return this.message;
};

PaymentPrice.Tag = '40218';

PaymentPrice.Type = 'PRICE';

module.exports = PaymentPrice;