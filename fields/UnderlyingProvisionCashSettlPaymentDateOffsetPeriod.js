var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateOffsetPeriod (underlyingProvisionCashSettlPaymentDateOffsetPeriod) {
  this.message = underlyingProvisionCashSettlPaymentDateOffsetPeriod;
}

UnderlyingProvisionCashSettlPaymentDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateOffsetPeriod.Tag = '42094';

UnderlyingProvisionCashSettlPaymentDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlPaymentDateOffsetPeriod;