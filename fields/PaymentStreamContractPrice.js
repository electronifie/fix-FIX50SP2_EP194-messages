var invert = require('invert-obj');

function PaymentStreamContractPrice (paymentStreamContractPrice) {
  this.message = paymentStreamContractPrice;
}

PaymentStreamContractPrice.prototype.value = function () {
  return this.message;
};

PaymentStreamContractPrice.Tag = '41190';

PaymentStreamContractPrice.Type = 'PRICE';

module.exports = PaymentStreamContractPrice;