var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateType (legProvisionCashSettlPaymentDateType) {
  this.message = legProvisionCashSettlPaymentDateType;
}

LegProvisionCashSettlPaymentDateType.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateType.Tag = '40475';

LegProvisionCashSettlPaymentDateType.Type = 'INT';

module.exports = LegProvisionCashSettlPaymentDateType;