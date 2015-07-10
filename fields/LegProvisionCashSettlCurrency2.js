var invert = require('invert-obj');

function LegProvisionCashSettlCurrency2 (legProvisionCashSettlCurrency2) {
  this.message = legProvisionCashSettlCurrency2;
}

LegProvisionCashSettlCurrency2.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlCurrency2.Tag = '40468';

LegProvisionCashSettlCurrency2.Type = 'CURRENCY';

module.exports = LegProvisionCashSettlCurrency2;