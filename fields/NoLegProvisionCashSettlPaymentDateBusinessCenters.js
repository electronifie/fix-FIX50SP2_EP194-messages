var invert = require('invert-obj');

function NoLegProvisionCashSettlPaymentDateBusinessCenters (noLegProvisionCashSettlPaymentDateBusinessCenters) {
  this.message = noLegProvisionCashSettlPaymentDateBusinessCenters;
}

NoLegProvisionCashSettlPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionCashSettlPaymentDateBusinessCenters.Tag = '40934';

NoLegProvisionCashSettlPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionCashSettlPaymentDateBusinessCenters;