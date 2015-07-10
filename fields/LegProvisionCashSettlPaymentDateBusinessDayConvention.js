var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateBusinessDayConvention (legProvisionCashSettlPaymentDateBusinessDayConvention) {
  this.message = legProvisionCashSettlPaymentDateBusinessDayConvention;
}

LegProvisionCashSettlPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateBusinessDayConvention.Tag = '40516';

LegProvisionCashSettlPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionCashSettlPaymentDateBusinessDayConvention;