var invert = require('invert-obj');

function NoUnderlyingProvisionCashSettlPaymentDates (noUnderlyingProvisionCashSettlPaymentDates) {
  this.message = noUnderlyingProvisionCashSettlPaymentDates;
}

NoUnderlyingProvisionCashSettlPaymentDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionCashSettlPaymentDates.Tag = '42099';

NoUnderlyingProvisionCashSettlPaymentDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionCashSettlPaymentDates;