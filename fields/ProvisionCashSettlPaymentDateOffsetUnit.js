var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateOffsetUnit (provisionCashSettlPaymentDateOffsetUnit) {
  this.message = provisionCashSettlPaymentDateOffsetUnit;
}

ProvisionCashSettlPaymentDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateOffsetUnit.Tag = '40167';

ProvisionCashSettlPaymentDateOffsetUnit.Type = 'STRING';

module.exports = ProvisionCashSettlPaymentDateOffsetUnit;