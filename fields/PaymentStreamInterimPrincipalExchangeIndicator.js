var invert = require('invert-obj');

function PaymentStreamInterimPrincipalExchangeIndicator (paymentStreamInterimPrincipalExchangeIndicator) {
  this.message = paymentStreamInterimPrincipalExchangeIndicator;
}

PaymentStreamInterimPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamInterimPrincipalExchangeIndicator.Tag = '40749';

PaymentStreamInterimPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamInterimPrincipalExchangeIndicator;