var invert = require('invert-obj');

function LegProvisionCashSettlPaymentDateRangeLast (legProvisionCashSettlPaymentDateRangeLast) {
  this.message = legProvisionCashSettlPaymentDateRangeLast;
}

LegProvisionCashSettlPaymentDateRangeLast.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlPaymentDateRangeLast.Tag = '40523';

LegProvisionCashSettlPaymentDateRangeLast.Type = 'LOCALMKTDATE';

module.exports = LegProvisionCashSettlPaymentDateRangeLast;