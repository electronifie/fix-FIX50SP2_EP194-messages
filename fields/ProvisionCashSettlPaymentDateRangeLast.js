var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateRangeLast (provisionCashSettlPaymentDateRangeLast) {
  this.message = provisionCashSettlPaymentDateRangeLast;
}

ProvisionCashSettlPaymentDateRangeLast.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateRangeLast.Tag = '40170';

ProvisionCashSettlPaymentDateRangeLast.Type = 'LOCALMKTDATE';

module.exports = ProvisionCashSettlPaymentDateRangeLast;