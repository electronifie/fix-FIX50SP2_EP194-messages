var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateRelativeTo (underlyingProvisionCashSettlPaymentDateRelativeTo) {
  this.message = underlyingProvisionCashSettlPaymentDateRelativeTo;
}

UnderlyingProvisionCashSettlPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateRelativeTo.Tag = '42093';

UnderlyingProvisionCashSettlPaymentDateRelativeTo.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlPaymentDateRelativeTo;