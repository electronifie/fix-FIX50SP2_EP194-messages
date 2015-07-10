var invert = require('invert-obj');

function UnderlyingProvisionCashSettlPaymentDateRangeFirst (underlyingProvisionCashSettlPaymentDateRangeFirst) {
  this.message = underlyingProvisionCashSettlPaymentDateRangeFirst;
}

UnderlyingProvisionCashSettlPaymentDateRangeFirst.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlPaymentDateRangeFirst.Tag = '42097';

UnderlyingProvisionCashSettlPaymentDateRangeFirst.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionCashSettlPaymentDateRangeFirst;