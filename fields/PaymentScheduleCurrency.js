var invert = require('invert-obj');

function PaymentScheduleCurrency (paymentScheduleCurrency) {
  this.message = paymentScheduleCurrency;
}

PaymentScheduleCurrency.prototype.value = function () {
  return this.message;
};

PaymentScheduleCurrency.Tag = '40836';

PaymentScheduleCurrency.Type = 'CURRENCY';

module.exports = PaymentScheduleCurrency;