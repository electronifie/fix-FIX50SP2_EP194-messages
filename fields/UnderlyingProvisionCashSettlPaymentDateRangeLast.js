var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateRangeLast (underlyingProvisionCashSettlPaymentDateRangeLast) {
  this.message = underlyingProvisionCashSettlPaymentDateRangeLast;
}

UnderlyingProvisionCashSettlPaymentDateRangeLast.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateRangeLast.Tag = '42098';

UnderlyingProvisionCashSettlPaymentDateRangeLast.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionCashSettlPaymentDateRangeLast;