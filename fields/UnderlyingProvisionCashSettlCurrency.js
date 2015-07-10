var invert = require('invert-obj');

function UnderlyingProvisionCashSettlCurrency (underlyingProvisionCashSettlCurrency) {
  this.message = underlyingProvisionCashSettlCurrency;
}

UnderlyingProvisionCashSettlCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlCurrency.Tag = '42167';

UnderlyingProvisionCashSettlCurrency.Type = 'CURRENCY';

module.exports = UnderlyingProvisionCashSettlCurrency;