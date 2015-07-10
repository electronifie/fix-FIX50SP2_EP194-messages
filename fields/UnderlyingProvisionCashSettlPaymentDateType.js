var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateType (underlyingProvisionCashSettlPaymentDateType) {
  this.message = underlyingProvisionCashSettlPaymentDateType;
}

UnderlyingProvisionCashSettlPaymentDateType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateType.Tag = '42101';

UnderlyingProvisionCashSettlPaymentDateType.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlPaymentDateType;