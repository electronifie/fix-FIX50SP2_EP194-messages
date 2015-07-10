var invert = require('invert-obj');

function PaymentPriceType (paymentPriceType) {
  this.message = paymentPriceType;
}

PaymentPriceType.prototype.value = function () {
  return this.message;
};

PaymentPriceType.Tag = '40919';

PaymentPriceType.Type = 'PRICE';

module.exports = PaymentPriceType;