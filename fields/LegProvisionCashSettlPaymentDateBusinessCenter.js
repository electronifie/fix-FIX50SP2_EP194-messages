var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateBusinessCenter (legProvisionCashSettlPaymentDateBusinessCenter) {
  this.message = legProvisionCashSettlPaymentDateBusinessCenter;
}

LegProvisionCashSettlPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateBusinessCenter.Tag = '40517';

LegProvisionCashSettlPaymentDateBusinessCenter.Type = 'STRING';

module.exports = LegProvisionCashSettlPaymentDateBusinessCenter;