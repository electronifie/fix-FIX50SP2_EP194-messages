var invert = require('invert-obj');

function NoProvisionCashSettlPaymentDateBusinessCenters (noProvisionCashSettlPaymentDateBusinessCenters) {
  this.message = noProvisionCashSettlPaymentDateBusinessCenters;
}

NoProvisionCashSettlPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoProvisionCashSettlPaymentDateBusinessCenters.Tag = '40952';

NoProvisionCashSettlPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoProvisionCashSettlPaymentDateBusinessCenters;