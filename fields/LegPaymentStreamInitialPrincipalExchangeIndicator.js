var invert = require('invert-obj');

function LegPaymentStreamInitialPrincipalExchangeIndicator (legPaymentStreamInitialPrincipalExchangeIndicator) {
  this.message = legPaymentStreamInitialPrincipalExchangeIndicator;
}

LegPaymentStreamInitialPrincipalExchangeIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialPrincipalExchangeIndicator.Tag = '40289';

LegPaymentStreamInitialPrincipalExchangeIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamInitialPrincipalExchangeIndicator;