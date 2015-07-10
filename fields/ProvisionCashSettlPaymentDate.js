var invert = require('invert-obj');

function ProvisionCashSettlPaymentDate (provisionCashSettlPaymentDate) {
  this.message = provisionCashSettlPaymentDate;
}

ProvisionCashSettlPaymentDate.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDate.Tag = '40172';

ProvisionCashSettlPaymentDate.Type = 'LOCALMKTDATE';

module.exports = ProvisionCashSettlPaymentDate;