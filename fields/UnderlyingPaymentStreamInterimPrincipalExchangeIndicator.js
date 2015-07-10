var invert = require('invert-obj');

function UnderlyingPaymentStreamInterimPrincipalExchangeIndicator (underlyingPaymentStreamInterimPrincipalExchangeIndicator) {
  this.message = underlyingPaymentStreamInterimPrincipalExchangeIndicator;
}

UnderlyingPaymentStreamInterimPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInterimPrincipalExchangeIndicator.Tag = '40579';

UnderlyingPaymentStreamInterimPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamInterimPrincipalExchangeIndicator;