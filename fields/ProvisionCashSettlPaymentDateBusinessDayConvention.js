var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateBusinessDayConvention (provisionCashSettlPaymentDateBusinessDayConvention) {
  this.message = provisionCashSettlPaymentDateBusinessDayConvention;
}

ProvisionCashSettlPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateBusinessDayConvention.Tag = '40163';

ProvisionCashSettlPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = ProvisionCashSettlPaymentDateBusinessDayConvention;