var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateRangeFirst (legProvisionCashSettlPaymentDateRangeFirst) {
  this.message = legProvisionCashSettlPaymentDateRangeFirst;
}

LegProvisionCashSettlPaymentDateRangeFirst.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateRangeFirst.Tag = '40522';

LegProvisionCashSettlPaymentDateRangeFirst.Type = 'LOCALMKTDATE';

module.exports = LegProvisionCashSettlPaymentDateRangeFirst;