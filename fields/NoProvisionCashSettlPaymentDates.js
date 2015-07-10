var invert = require('invert-obj');

function NoProvisionCashSettlPaymentDates (noProvisionCashSettlPaymentDates) {
  this.message = noProvisionCashSettlPaymentDates;
}

NoProvisionCashSettlPaymentDates.prototype.value = function () {
  return this.message;
};

NoProvisionCashSettlPaymentDates.Tag = '40171';

NoProvisionCashSettlPaymentDates.Type = 'NUMINGROUP';

module.exports = NoProvisionCashSettlPaymentDates;