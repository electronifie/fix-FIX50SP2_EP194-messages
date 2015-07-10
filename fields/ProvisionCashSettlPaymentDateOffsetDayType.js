var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateOffsetDayType (provisionCashSettlPaymentDateOffsetDayType) {
  this.message = provisionCashSettlPaymentDateOffsetDayType;
}

ProvisionCashSettlPaymentDateOffsetDayType.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateOffsetDayType.Tag = '40168';

ProvisionCashSettlPaymentDateOffsetDayType.Type = 'INT';

module.exports = ProvisionCashSettlPaymentDateOffsetDayType;