var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDate (underlyingProvisionCashSettlPaymentDate) {
  this.message = underlyingProvisionCashSettlPaymentDate;
}

UnderlyingProvisionCashSettlPaymentDate.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDate.Tag = '42100';

UnderlyingProvisionCashSettlPaymentDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionCashSettlPaymentDate;