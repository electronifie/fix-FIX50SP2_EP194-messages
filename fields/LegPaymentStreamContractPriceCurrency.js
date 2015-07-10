var invert = require('invert-obj');

function LegPaymentStreamContractPriceCurrency (legPaymentStreamContractPriceCurrency) {
  this.message = legPaymentStreamContractPriceCurrency;
}

LegPaymentStreamContractPriceCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamContractPriceCurrency.Tag = '41560';

LegPaymentStreamContractPriceCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamContractPriceCurrency;