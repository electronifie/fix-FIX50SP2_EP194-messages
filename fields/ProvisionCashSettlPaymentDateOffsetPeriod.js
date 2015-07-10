var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateOffsetPeriod (provisionCashSettlPaymentDateOffsetPeriod) {
  this.message = provisionCashSettlPaymentDateOffsetPeriod;
}

ProvisionCashSettlPaymentDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateOffsetPeriod.Tag = '40166';

ProvisionCashSettlPaymentDateOffsetPeriod.Type = 'INT';

module.exports = ProvisionCashSettlPaymentDateOffsetPeriod;