var invert = require('invert-obj');

function NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters (noUnderlyingProvisionCashSettlPaymentDateBusinessCenters) {
  this.message = noUnderlyingProvisionCashSettlPaymentDateBusinessCenters;
}

NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters.Tag = '42180';

NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters;