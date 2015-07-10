var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateRelativeTo (legProvisionCashSettlPaymentDateRelativeTo) {
  this.message = legProvisionCashSettlPaymentDateRelativeTo;
}

LegProvisionCashSettlPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateRelativeTo.Tag = '40518';

LegProvisionCashSettlPaymentDateRelativeTo.Type = 'INT';

module.exports = LegProvisionCashSettlPaymentDateRelativeTo;