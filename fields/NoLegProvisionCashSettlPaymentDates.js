var invert = require('invert-obj');

function NoLegProvisionCashSettlPaymentDates (noLegProvisionCashSettlPaymentDates) {
  this.message = noLegProvisionCashSettlPaymentDates;
}

NoLegProvisionCashSettlPaymentDates.prototype.value = function () {
  return this.message;
};

NoLegProvisionCashSettlPaymentDates.Tag = '40473';

NoLegProvisionCashSettlPaymentDates.Type = 'NUMINGROUP';

module.exports = NoLegProvisionCashSettlPaymentDates;