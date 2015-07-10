var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateRelativeTo (provisionCashSettlPaymentDateRelativeTo) {
  this.message = provisionCashSettlPaymentDateRelativeTo;
}

ProvisionCashSettlPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateRelativeTo.Tag = '40165';

ProvisionCashSettlPaymentDateRelativeTo.Type = 'INT';

module.exports = ProvisionCashSettlPaymentDateRelativeTo;