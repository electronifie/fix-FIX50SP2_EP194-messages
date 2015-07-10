var invert = require('invert-obj');

function UnderlyingPaymentStreamFinalPrincipalExchangeIndicator (underlyingPaymentStreamFinalPrincipalExchangeIndicator) {
  this.message = underlyingPaymentStreamFinalPrincipalExchangeIndicator;
}

UnderlyingPaymentStreamFinalPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFinalPrincipalExchangeIndicator.Tag = '40580';

UnderlyingPaymentStreamFinalPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamFinalPrincipalExchangeIndicator;