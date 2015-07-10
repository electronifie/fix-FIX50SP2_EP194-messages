var invert = require('invert-obj');

function LegProvisionCashSettlCurrency (legProvisionCashSettlCurrency) {
  this.message = legProvisionCashSettlCurrency;
}

LegProvisionCashSettlCurrency.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlCurrency.Tag = '40467';

LegProvisionCashSettlCurrency.Type = 'CURRENCY';

module.exports = LegProvisionCashSettlCurrency;