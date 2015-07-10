var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateOffsetUnit (underlyingProvisionCashSettlPaymentDateOffsetUnit) {
  this.message = underlyingProvisionCashSettlPaymentDateOffsetUnit;
}

UnderlyingProvisionCashSettlPaymentDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateOffsetUnit.Tag = '42095';

UnderlyingProvisionCashSettlPaymentDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlPaymentDateOffsetUnit;