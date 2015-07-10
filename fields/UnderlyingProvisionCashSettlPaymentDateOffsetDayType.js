var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateOffsetDayType (underlyingProvisionCashSettlPaymentDateOffsetDayType) {
  this.message = underlyingProvisionCashSettlPaymentDateOffsetDayType;
}

UnderlyingProvisionCashSettlPaymentDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateOffsetDayType.Tag = '42096';

UnderlyingProvisionCashSettlPaymentDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlPaymentDateOffsetDayType;