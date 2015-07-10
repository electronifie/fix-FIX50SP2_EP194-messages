var invert = require('invert-obj');

function PaymentStreamRateOrAmountCurrency (paymentStreamRateOrAmountCurrency) {
  this.message = paymentStreamRateOrAmountCurrency;
}

PaymentStreamRateOrAmountCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamRateOrAmountCurrency.Tag = '40786';

PaymentStreamRateOrAmountCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamRateOrAmountCurrency;