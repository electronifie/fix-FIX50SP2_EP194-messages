var invert = require('invert-obj');

function PaymentStreamContractPriceCurrency (paymentStreamContractPriceCurrency) {
  this.message = paymentStreamContractPriceCurrency;
}

PaymentStreamContractPriceCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamContractPriceCurrency.Tag = '41191';

PaymentStreamContractPriceCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamContractPriceCurrency;