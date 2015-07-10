var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDate (legProvisionCashSettlPaymentDate) {
  this.message = legProvisionCashSettlPaymentDate;
}

LegProvisionCashSettlPaymentDate.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDate.Tag = '40474';

LegProvisionCashSettlPaymentDate.Type = 'LOCALMKTDATE';

module.exports = LegProvisionCashSettlPaymentDate;