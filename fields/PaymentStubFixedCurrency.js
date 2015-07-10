var invert = require('invert-obj');

function PaymentStubFixedCurrency (paymentStubFixedCurrency) {
  this.message = paymentStubFixedCurrency;
}

PaymentStubFixedCurrency.prototype.value = function () {
  return this.message;
};

PaymentStubFixedCurrency.Tag = '40877';

PaymentStubFixedCurrency.Type = 'CURRENCY';

module.exports = PaymentStubFixedCurrency;