var invert = require('invert-obj');

function PaymentPresentValueCurrency (paymentPresentValueCurrency) {
  this.message = paymentPresentValueCurrency;
}

PaymentPresentValueCurrency.prototype.value = function () {
  return this.message;
};

PaymentPresentValueCurrency.Tag = '40226';

PaymentPresentValueCurrency.Type = 'CURRENCY';

module.exports = PaymentPresentValueCurrency;