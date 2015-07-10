var invert = require('invert-obj');

function LegPaymentStreamSettlCurrency (legPaymentStreamSettlCurrency) {
  this.message = legPaymentStreamSettlCurrency;
}

LegPaymentStreamSettlCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamSettlCurrency.Tag = '40282';

LegPaymentStreamSettlCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamSettlCurrency;