var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateBusinessCenter (underlyingProvisionCashSettlPaymentDateBusinessCenter) {
  this.message = underlyingProvisionCashSettlPaymentDateBusinessCenter;
}

UnderlyingProvisionCashSettlPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateBusinessCenter.Tag = '42181';

UnderlyingProvisionCashSettlPaymentDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlPaymentDateBusinessCenter;