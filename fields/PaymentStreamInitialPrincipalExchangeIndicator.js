var invert = require('invert-obj');

function PaymentStreamInitialPrincipalExchangeIndicator (paymentStreamInitialPrincipalExchangeIndicator) {
  this.message = paymentStreamInitialPrincipalExchangeIndicator;
}

PaymentStreamInitialPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialPrincipalExchangeIndicator.Tag = '40748';

PaymentStreamInitialPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamInitialPrincipalExchangeIndicator;