var invert = require('invert-obj');

function LegPaymentStreamContractPrice (legPaymentStreamContractPrice) {
  this.message = legPaymentStreamContractPrice;
}

LegPaymentStreamContractPrice.prototype.value = function () {
  return this.message;
};

LegPaymentStreamContractPrice.Tag = '41559';

LegPaymentStreamContractPrice.Type = 'PRICE';

module.exports = LegPaymentStreamContractPrice;