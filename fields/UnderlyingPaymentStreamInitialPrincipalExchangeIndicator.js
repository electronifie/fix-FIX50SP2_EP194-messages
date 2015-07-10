var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialPrincipalExchangeIndicator (underlyingPaymentStreamInitialPrincipalExchangeIndicator) {
  this.message = underlyingPaymentStreamInitialPrincipalExchangeIndicator;
}

UnderlyingPaymentStreamInitialPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialPrincipalExchangeIndicator.Tag = '40578';

UnderlyingPaymentStreamInitialPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamInitialPrincipalExchangeIndicator;