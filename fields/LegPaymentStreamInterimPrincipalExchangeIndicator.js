var invert = require('invert-obj');

function LegPaymentStreamInterimPrincipalExchangeIndicator (legPaymentStreamInterimPrincipalExchangeIndicator) {
  this.message = legPaymentStreamInterimPrincipalExchangeIndicator;
}

LegPaymentStreamInterimPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInterimPrincipalExchangeIndicator.Tag = '40290';

LegPaymentStreamInterimPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamInterimPrincipalExchangeIndicator;