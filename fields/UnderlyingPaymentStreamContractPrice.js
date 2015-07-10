var invert = require('invert-obj');

function UnderlyingPaymentStreamContractPrice (underlyingPaymentStreamContractPrice) {
  this.message = underlyingPaymentStreamContractPrice;
}

UnderlyingPaymentStreamContractPrice.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamContractPrice.Tag = '41907';

UnderlyingPaymentStreamContractPrice.Type = 'PRICE';

module.exports = UnderlyingPaymentStreamContractPrice;