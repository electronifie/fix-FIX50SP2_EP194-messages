var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateRangeFirst (provisionCashSettlPaymentDateRangeFirst) {
  this.message = provisionCashSettlPaymentDateRangeFirst;
}

ProvisionCashSettlPaymentDateRangeFirst.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlPaymentDateRangeFirst.Tag = '40169';

ProvisionCashSettlPaymentDateRangeFirst.Type = 'LOCALMKTDATE';

module.exports = ProvisionCashSettlPaymentDateRangeFirst;