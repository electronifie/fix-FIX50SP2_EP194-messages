var invert = require('invert-obj');

function LegPaymentStreamFinalPrincipalExchangeIndicator (legPaymentStreamFinalPrincipalExchangeIndicator) {
  this.message = legPaymentStreamFinalPrincipalExchangeIndicator;
}

LegPaymentStreamFinalPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFinalPrincipalExchangeIndicator.Tag = '40291';

LegPaymentStreamFinalPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamFinalPrincipalExchangeIndicator;