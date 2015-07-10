var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableRefCurrency (legPaymentStreamNonDeliverableRefCurrency) {
  this.message = legPaymentStreamNonDeliverableRefCurrency;
}

LegPaymentStreamNonDeliverableRefCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableRefCurrency.Tag = '40359';

LegPaymentStreamNonDeliverableRefCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamNonDeliverableRefCurrency;