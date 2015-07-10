var invert = require('invert-obj');

function UnderlyingProvisionCashSettlCurrency2 (underlyingProvisionCashSettlCurrency2) {
  this.message = underlyingProvisionCashSettlCurrency2;
}

UnderlyingProvisionCashSettlCurrency2.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlCurrency2.Tag = '42168';

UnderlyingProvisionCashSettlCurrency2.Type = 'CURRENCY';

module.exports = UnderlyingProvisionCashSettlCurrency2;