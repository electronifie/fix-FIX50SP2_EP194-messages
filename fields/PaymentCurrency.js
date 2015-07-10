var invert = require('invert-obj');

function PaymentCurrency (paymentCurrency) {
  this.message = paymentCurrency;
}

PaymentCurrency.prototype.value = function () {
  return this.message;
};

PaymentCurrency.Tag = '40216';

PaymentCurrency.Type = 'CURRENCY';

module.exports = PaymentCurrency;