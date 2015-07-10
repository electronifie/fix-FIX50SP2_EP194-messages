var invert = require('invert-obj');

function CashSettlValuationSubsequentBusinessDaysOffset (cashSettlValuationSubsequentBusinessDaysOffset) {
  this.message = cashSettlValuationSubsequentBusinessDaysOffset;
}

CashSettlValuationSubsequentBusinessDaysOffset.prototype.value = function () {
  return this.message;
};

CashSettlValuationSubsequentBusinessDaysOffset.Tag = '40916';

CashSettlValuationSubsequentBusinessDaysOffset.Type = 'INT';

module.exports = CashSettlValuationSubsequentBusinessDaysOffset;