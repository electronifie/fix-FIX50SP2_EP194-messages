var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateOffsetUnit (legProvisionCashSettlPaymentDateOffsetUnit) {
  this.message = legProvisionCashSettlPaymentDateOffsetUnit;
}

LegProvisionCashSettlPaymentDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateOffsetUnit.Tag = '40520';

LegProvisionCashSettlPaymentDateOffsetUnit.Type = 'STRING';

module.exports = LegProvisionCashSettlPaymentDateOffsetUnit;