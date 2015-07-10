var invert = require('invert-obj');

function UnderlyingPaymentStreamContractPriceCurrency (underlyingPaymentStreamContractPriceCurrency) {
  this.message = underlyingPaymentStreamContractPriceCurrency;
}

UnderlyingPaymentStreamContractPriceCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamContractPriceCurrency.Tag = '41908';

UnderlyingPaymentStreamContractPriceCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamContractPriceCurrency;