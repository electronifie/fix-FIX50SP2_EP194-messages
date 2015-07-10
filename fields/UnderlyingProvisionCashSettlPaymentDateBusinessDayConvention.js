var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention (underlyingProvisionCashSettlPaymentDateBusinessDayConvention) {
  this.message = underlyingProvisionCashSettlPaymentDateBusinessDayConvention;
}

UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention.Tag = '42092';

UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention;