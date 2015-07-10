var invert = require('invert-obj');

function ProvisionCashSettlCurrency (provisionCashSettlCurrency) {
  this.message = provisionCashSettlCurrency;
}

ProvisionCashSettlCurrency.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlCurrency.Tag = '40109';

ProvisionCashSettlCurrency.Type = 'CURRENCY';

module.exports = ProvisionCashSettlCurrency;