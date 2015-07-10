var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateOffsetPeriod (legProvisionCashSettlPaymentDateOffsetPeriod) {
  this.message = legProvisionCashSettlPaymentDateOffsetPeriod;
}

LegProvisionCashSettlPaymentDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateOffsetPeriod.Tag = '40519';

LegProvisionCashSettlPaymentDateOffsetPeriod.Type = 'INT';

module.exports = LegProvisionCashSettlPaymentDateOffsetPeriod;