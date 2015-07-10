var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateBusinessCenter (provisionCashSettlPaymentDateBusinessCenter) {
  this.message = provisionCashSettlPaymentDateBusinessCenter;
}

ProvisionCashSettlPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateBusinessCenter.Tag = '40164';

ProvisionCashSettlPaymentDateBusinessCenter.Type = 'STRING';

module.exports = ProvisionCashSettlPaymentDateBusinessCenter;