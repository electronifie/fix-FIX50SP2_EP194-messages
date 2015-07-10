var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateOffsetDayType (legProvisionCashSettlPaymentDateOffsetDayType) {
  this.message = legProvisionCashSettlPaymentDateOffsetDayType;
}

LegProvisionCashSettlPaymentDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateOffsetDayType.Tag = '40521';

LegProvisionCashSettlPaymentDateOffsetDayType.Type = 'INT';

module.exports = LegProvisionCashSettlPaymentDateOffsetDayType;