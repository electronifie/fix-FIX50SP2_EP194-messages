var invert = require('invert-obj');

function PaymentStreamFinalPrincipalExchangeIndicator (paymentStreamFinalPrincipalExchangeIndicator) {
  this.message = paymentStreamFinalPrincipalExchangeIndicator;
}

PaymentStreamFinalPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamFinalPrincipalExchangeIndicator.Tag = '40750';

PaymentStreamFinalPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamFinalPrincipalExchangeIndicator;