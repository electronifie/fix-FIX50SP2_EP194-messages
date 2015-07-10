var invert = require('invert-obj');

function ProvisionCashSettlCurrency2 (provisionCashSettlCurrency2) {
  this.message = provisionCashSettlCurrency2;
}

ProvisionCashSettlCurrency2.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlCurrency2.Tag = '40110';

ProvisionCashSettlCurrency2.Type = 'CURRENCY';

module.exports = ProvisionCashSettlCurrency2;